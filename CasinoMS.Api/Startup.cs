using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CasinoMS.Data;
using CasinoMS.Data.Entities.Security;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using CasinoMS.Data.Repository.User;
using CasinoMS.Data.Repositories.ErrorLogs;
using CasinoMS.Data.Repository.UserType;
using CasinoMS.Data.Repository.Team;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using CasinoMS.Core.Model;
using CasinoMS.Data.Repository.TransactionDetails;
using System.IO;
using CasinoMS.Core.Interface;
using CasinoMS.Core.WorkerService;

namespace CasinoMS
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            #region DBContext Configuration

            services.AddDbContextPool<CasinoMSDBContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("CasinoMSDb"));
            });
            services.AddControllers();

            #endregion

            #region ASP.Net Core Identity Configuration

            services.AddDefaultIdentity<ScrAccount>().AddEntityFrameworkStores<CasinoMSDBContext>();

            #endregion

            #region AppSettings Injection 

            services.Configure<ApplicationSettingsModel>(Configuration.GetSection("ApplicationSettings"));

            #endregion

            #region Password Configuration

            services.Configure<IdentityOptions>(options => 
            {
                options.Password.RequireDigit = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 5;
            });

            #endregion

            #region Repository Bindings

            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IErrorLogsRepository, ErrorLogsRepository>();
            services.AddScoped<IUserTypeRepository, UserTypeRepository>();
            services.AddScoped<ITeamRepository, TeamRepository>();
            services.AddScoped<ITransactionDetailsRepository, TransactionDetailsRepository>();

            #endregion

            #region Worker Service Bindings

            services.AddScoped<ILoaderNotification, LoaderNotificationWorkerService>();
            services.AddScoped<IFinancerNotification, FinancerNotificationWorkerService>();
            services.AddScoped<IUserWorkerService, UserWorkerService>();

            #endregion

            #region JWT Authentication

            var key = Encoding.UTF8.GetBytes(Configuration["ApplicationSettings:JWT_Secret"].ToString());

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = false;
                x.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });

            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder =>
            {
                builder.WithOrigins(Configuration["ApplicationSettings:AngularDevTest_Url"].ToString(), Configuration["ApplicationSettings:AzureDevTest_Url"].ToString());
                builder.AllowAnyHeader();
                builder.AllowAnyMethod();
            });

            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();

            //Fix for Angular Routing overriding WebApi Routing
            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
