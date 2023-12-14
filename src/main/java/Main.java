import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {

    private static final File FILE = new File("data_v7.23.js");

    public static void main(String[] args) throws IOException {
        printHeavenlyUpgrades();
        //printAchievements();
        //addExtraAchievementData();
    }

    private static void printHeavenlyUpgrades() throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(FILE));
        PrintWriter export = new PrintWriter(Files.newOutputStream(Paths.get("heavenly.txt")));
        String line;
        boolean upgrade = false;
        boolean name = false;
        boolean desc = false;
        boolean cost = false;
        String nameStr = "";
        String descStr = "";
        String costStr = "";
        while ((line = reader.readLine()) != null) {
            line = line.trim();
            if (line.startsWith("new G.Upgrade")) {
                upgrade = true;
                continue;
            }
            if (upgrade && line.startsWith("name:")) {
                name = true;
                nameStr = line.replaceFirst("name: `", "")
                        .replace("`,", "");
                continue;
            }
            if (name && line.startsWith("desc:")) {
                desc = true;
                descStr = line.replaceFirst("desc: `", "")
                        .replace("`,", "");
                continue;
            }
            if (desc && line.startsWith("cost:")) {
                cost = true;
                costStr = line.replaceFirst("cost: ", "")
                        .replace(",", "");
                continue;
            }
            if (cost && line.startsWith("pool:")) {
                if (line.contains("'prestige'")) {
                    export.println(nameStr + " | " + costStr + " | " + descStr);
                }
                upgrade = false;
                name = false;
                desc = false;
                cost = false;
                nameStr = "";
                descStr = "";
                costStr = "";
                continue;
            }
        }
        export.flush();
        export.close();
    }

    private static void printAchievements() throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(FILE));
        PrintWriter export = new PrintWriter(Files.newOutputStream(Paths.get("achievements_v7.txt")));
        String line;
        boolean achievement = false;
        while ((line = reader.readLine()) != null) {
            line = line.trim();
            if (line.startsWith("new G.Achiev")) {
                achievement = true;
                continue;
            }
            if (achievement && line.startsWith("name:")) {
                export.println(line.replace("name:`", "").replace("`,",
                        ""));
                achievement = false;
                continue;
            }
        }
        export.flush();
        export.close();
    }

        /*<td>Don't stop me now
          </td>
          <td>Bake <b>100 quintillion</b> cookies in one ascension.
          </td>*/

    private static void addExtraAchievementData() throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(FILE));
        PrintWriter export = new PrintWriter(Files.newOutputStream(Paths.get("achievementsExtended.txt")));
        String achievement;
        while ((achievement = reader.readLine()) != null) {
            achievement = achievement.trim();
            String line;
            File fileHtml = new File("welp.html");
            BufferedReader readerHtml = new BufferedReader(new FileReader(fileHtml));
            String name = "";
            String desc = "";
            while ((line = readerHtml.readLine()) != null) {
                line = line.trim();
                if (line.startsWith("<td>")) {
                    name = line.replaceFirst("<td>", "");
                    line = readerHtml.readLine().trim();
                    if (line.startsWith("</td>")) {
                        line = readerHtml.readLine().trim();
                        if (line.startsWith("<td>")) {
                            desc = line.replaceFirst("<td>", "");
                            if (name.equalsIgnoreCase(achievement)) {
                                break;
                            } else {
                                name = "";
                                desc = "";
                            }
                        } else {
                            name = "";
                            desc = "";
                        }
                    } else {
                        name = "";
                        desc = "";
                    }
                }
            }
            if (name.isEmpty() || desc.isEmpty()) {
                System.out.println(achievement);
            }
            export.println(achievement + " | " + desc);
        }
        export.flush();
        export.close();
    }

}
