using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CasinoMS.Data.Migrations
{
    public partial class updatedbschema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "def_user_type",
                columns: table => new
                {
                    UserTypeId = table.Column<Guid>(nullable: false),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(maxLength: 20, nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 20, nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_def_user_type", x => x.UserTypeId);
                });

            migrationBuilder.CreateTable(
                name: "inf_error_logs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProcessId = table.Column<Guid>(nullable: false),
                    Exception = table.Column<string>(maxLength: 250, nullable: false),
                    InnerException = table.Column<string>(maxLength: 250, nullable: true),
                    WebAPI = table.Column<string>(maxLength: 250, nullable: false),
                    ExecutedBy = table.Column<string>(maxLength: 20, nullable: true),
                    ExecutedDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inf_error_logs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "inf_user",
                columns: table => new
                {
                    UserId = table.Column<Guid>(nullable: false),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(maxLength: 20, nullable: false),
                    LastName = table.Column<string>(maxLength: 20, nullable: false),
                    LoaderName = table.Column<string>(maxLength: 30, nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 20, nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    UserTypeId = table.Column<Guid>(nullable: false),
                    TransactionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inf_user", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_inf_user_def_user_type_UserTypeId",
                        column: x => x.UserTypeId,
                        principalTable: "def_user_type",
                        principalColumn: "UserTypeId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_inf_user_UserTypeId",
                table: "inf_user",
                column: "UserTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "inf_error_logs");

            migrationBuilder.DropTable(
                name: "inf_user");

            migrationBuilder.DropTable(
                name: "def_user_type");
        }
    }
}
