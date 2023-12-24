import achievements.AchievementsExport;
import format.CCFormatter;
import index.IndexExport;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import upgrades.HeavenlyExport;

public class Main {

    public static final Path OUT_FOLDER = Paths.get("..", "CookieClickerMobileWiki");
    public static final String VERSION = "v7.25";
    public static final String DEVICE = "Android";

    public static void main(String[] args) throws IOException {
        String indexTable = IndexExport.formatIndex();
        Files.writeString(OUT_FOLDER.resolve("index.md"),
                CCFormatter.formatTemplate(
                        Files.readString(Paths.get("templates", "index.md")),
                        VERSION, DEVICE, indexTable));

        String heavenlyUpgradesTable = HeavenlyExport.formatHeavenlyUpgrades();
        Files.writeString(OUT_FOLDER.resolve("heavenly.md"),
                CCFormatter.formatTemplate(
                        Files.readString(Paths.get("templates", "heavenly.md")),
                        VERSION, DEVICE, heavenlyUpgradesTable));

        String achievementsTable = AchievementsExport.formatAchievements();
        Files.writeString(OUT_FOLDER.resolve("achievements.md"),
                CCFormatter.formatTemplate(
                        Files.readString(Paths.get("templates", "achievements.md")),
                        VERSION, DEVICE, achievementsTable));
    }

}
