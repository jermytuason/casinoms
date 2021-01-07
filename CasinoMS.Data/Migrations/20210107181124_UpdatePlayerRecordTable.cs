using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CasinoMS.Data.Migrations
{
    public partial class UpdatePlayerRecordTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "TeamId",
                table: "inf_player_record",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_inf_player_record_TeamId",
                table: "inf_player_record",
                column: "TeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_inf_player_record_def_teams_TeamId",
                table: "inf_player_record",
                column: "TeamId",
                principalTable: "def_teams",
                principalColumn: "TeamId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_inf_player_record_def_teams_TeamId",
                table: "inf_player_record");

            migrationBuilder.DropIndex(
                name: "IX_inf_player_record_TeamId",
                table: "inf_player_record");

            migrationBuilder.DropColumn(
                name: "TeamId",
                table: "inf_player_record");
        }
    }
}
