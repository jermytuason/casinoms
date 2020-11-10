using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CasinoMS.Data.Migrations
{
    public partial class inittransactiontable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TransactionId",
                table: "inf_user");

            migrationBuilder.AddColumn<Guid>(
                name: "ProcessId",
                table: "inf_user",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "inf_transaction_details",
                columns: table => new
                {
                    TransactionId = table.Column<Guid>(nullable: false),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TrasactionType = table.Column<string>(maxLength: 10, nullable: false),
                    PlayerUserName = table.Column<string>(maxLength: 30, nullable: false),
                    ReferenceNo = table.Column<string>(maxLength: 30, nullable: false),
                    Amount = table.Column<decimal>(maxLength: 30, nullable: false),
                    SubmittedBy = table.Column<string>(maxLength: 20, nullable: true),
                    SubmittedDate = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false),
                    ProcessId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inf_transaction_details", x => x.TransactionId);
                    table.ForeignKey(
                        name: "FK_inf_transaction_details_inf_user_UserId",
                        column: x => x.UserId,
                        principalTable: "inf_user",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_inf_transaction_details_UserId",
                table: "inf_transaction_details",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "inf_transaction_details");

            migrationBuilder.DropColumn(
                name: "ProcessId",
                table: "inf_user");

            migrationBuilder.AddColumn<Guid>(
                name: "TransactionId",
                table: "inf_user",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }
    }
}
