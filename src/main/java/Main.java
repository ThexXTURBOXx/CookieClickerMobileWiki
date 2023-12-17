import format.CCFormatter;
import heavenlies.HeavenlyExport;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class Main {

    public static final Path SCRIPT_FILE = Paths.get("test_data_scripts", "test_data_v7.23.js");
    public static final Path OUT_FOLDER = Paths.get("..", "CookieClickerMobileWiki");
    public static final String VERSION = "v7.23";
    public static final String DEVICE = "Android";

    public static void main(String[] args) throws IOException {
        // Enable ES6 JS standard
        System.setProperty("nashorn.args", "--language=es6");

        String heavenliesTable = HeavenlyExport.printHeavenlyUpgrades(SCRIPT_FILE);
        Files.writeString(OUT_FOLDER.resolve("heavenly.md"),
                CCFormatter.formatTemplate(
                        Files.readString(Paths.get("templates", "heavenly.md")),
                        VERSION, DEVICE, heavenliesTable));

        /*String achievementsTable = AchievementsExport.formatAchievements(SCRIPT_FILE);
        Files.writeString(OUT_FOLDER.resolve("achievements.md"),
                CCFormatter.formatTemplate(
                        Files.readString(Paths.get("templates", "achievements.md")),
                        VERSION, DEVICE, achievementsTable));*/
    }

}
