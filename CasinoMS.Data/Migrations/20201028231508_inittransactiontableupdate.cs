using Microsoft.EntityFrameworkCore.Migrations;

namespace CasinoMS.Data.Migrations
{
    public partial class inittransactiontableupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TrasactionType",
                table: "inf_transaction_details");

            migrationBuilder.AddColumn<string>(
                name: "TransactionType",
                table: "inf_transaction_details",
                maxLength: 10,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TransactionType",
                table: "inf_transaction_details");

            migrationBuilder.AddColumn<string>(
                name: "TrasactionType",
                table: "inf_transaction_details",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "");
        }
    }
}
