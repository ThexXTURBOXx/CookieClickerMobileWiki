import achievements.AchievementsExport;
import format.CCFormatter;
import index.IndexExport;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import upgrades.UpgradesExport;

public class Main {

    public static final Path OUT_FOLDER = Paths.get("..", "CookieClickerMobileWiki");
    public static final String VERSION = "v7.27";
    public static final String DEVICE = "Android";

    public static void main(String[] args) throws IOException {
        CCFormatter formatter = new CCFormatter();

        IndexExport indexExport = new IndexExport(formatter);
        AchievementsExport achievementsExport = new AchievementsExport(formatter);
        UpgradesExport upgradesExport = new UpgradesExport(formatter);

        String indexTable = indexExport.formatIndex();
        Files.writeString(OUT_FOLDER.resolve("index.md"),
                formatter.formatTemplate(
                        Files.readString(Paths.get("templates", "index.md")),
                        VERSION, DEVICE, indexTable));

        String achievementsTable = achievementsExport.formatAchievements();
        Files.writeString(OUT_FOLDER.resolve("achievements.md"),
                formatter.formatTemplate(
                        Files.readString(Paths.get("templates", "achievements.md")),
                        VERSION, DEVICE, achievementsTable));

        String heavenlyUpgradesTable = upgradesExport.formatHeavenlyUpgrades();
        Files.writeString(OUT_FOLDER.resolve("heavenly.md"),
                formatter.formatTemplate(
                        Files.readString(Paths.get("templates", "heavenly.md")),
                        VERSION, DEVICE, heavenlyUpgradesTable));

        String upgradesTable = upgradesExport.formatNormalUpgrades();
        Files.writeString(OUT_FOLDER.resolve("upgrades.md"),
                formatter.formatTemplate(
                        Files.readString(Paths.get("templates", "upgrades.md")),
                        VERSION, DEVICE, upgradesTable));
    }

}
