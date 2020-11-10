using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CasinoMS.Data.Migrations
{
    public partial class initteamstable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "TeamId",
                table: "inf_user",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "def_teams",
                columns: table => new
                {
                    TeamId = table.Column<Guid>(nullable: false),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(maxLength: 20, nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 20, nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_def_teams", x => x.TeamId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_inf_user_TeamId",
                table: "inf_user",
                column: "TeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_inf_user_def_teams_TeamId",
                table: "inf_user",
                column: "TeamId",
                principalTable: "def_teams",
                principalColumn: "TeamId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_inf_user_def_teams_TeamId",
                table: "inf_user");

            migrationBuilder.DropTable(
                name: "def_teams");

            migrationBuilder.DropIndex(
                name: "IX_inf_user_TeamId",
                table: "inf_user");

            migrationBuilder.DropColumn(
                name: "TeamId",
                table: "inf_user");
        }
    }
}
