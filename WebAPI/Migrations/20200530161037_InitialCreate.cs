using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PlantDetails",
                columns: table => new
                {
                    PMid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PlantName = table.Column<string>(type: "varchar(30)", nullable: false),
                    Mintemp = table.Column<int>(nullable: false),
                    Maxtemp = table.Column<int>(nullable: false),
                    MyProperty = table.Column<int>(nullable: false),
                    Maxwater = table.Column<string>(type: "varchar(15)", nullable: false),
                    Minwater = table.Column<string>(type: "varchar(15)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlantDetails", x => x.PMid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PlantDetails");
        }
    }
}
