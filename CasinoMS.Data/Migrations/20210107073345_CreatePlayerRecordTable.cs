using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CasinoMS.Data.Migrations
{
    public partial class CreatePlayerRecordTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "inf_player_record",
                columns: table => new
                {
                    PlayerRecordId = table.Column<Guid>(nullable: false),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlayerUserName = table.Column<string>(maxLength: 30, nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 20, nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ProcessId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inf_player_record", x => x.PlayerRecordId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "inf_player_record");
        }
    }
}
