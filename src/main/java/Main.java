import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {

    private static final File FILE = new File("data_v7.23.js");

    public static void main(String[] args) throws IOException {
        //printHeavenlyUpgrades();
        printAchievements();
        addExtraAchievementData();
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
                nameStr = line.replaceFirst("name:\\s*`", "")
                        .replace("`,", "");
                continue;
            }
            if (name && line.startsWith("id:")) {
                desc = true;
                descStr = line.replaceFirst("id:\\s*", "")
                        .replace("`,", "");
                continue;
            }
            if (name && line.startsWith("desc:")) {
                desc = true;
                descStr = line.replaceFirst("desc:\\s*`", "")
                        .replace("`,", "");
                continue;
            }
            if (desc && line.startsWith("cost:")) {
                cost = true;
                costStr = line.replaceFirst("cost:\\s*", "")
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

    private static final List<Achiev> ACHIEV_LIST = new ArrayList<>();

    private static class Achiev implements Comparable<Achiev> {
        private int id;
        private String name;
        private String desc;

        public Achiev(int id, String name, String desc) {
            this.id = id;
            this.name = name;
            this.desc = desc;
        }

        @Override
        public int compareTo(Achiev o) {
            return Integer.compare(id, o.id);
        }
    }

    private static void printAchievements() throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(FILE));
        PrintWriter export = new PrintWriter(Files.newOutputStream(Paths.get("achievements_v7.23.txt")));
        String line;
        String nameStr = "";
        String idStr = "";
        String descStr = "";
        boolean achievement = false;
        boolean name = false;
        boolean id = false;
        while ((line = reader.readLine()) != null) {
            line = line.trim();
            if (line.startsWith("new G.Achiev")) {
                achievement = true;
                continue;
            }
            if (achievement && line.startsWith("name:")) {
                nameStr = line.replaceFirst("name:\\s*`", "").replace("`,", "");
                name = true;
                continue;
            }
            if (name && line.startsWith("id:")) {
                idStr = line.replaceFirst("id:", "").replace(",", "");
                id = true;
                continue;
            }
            if (id && line.startsWith("desc:")) {
                descStr = line.replaceFirst("desc:\\s*`", "").replace("`,", "");
                continue;
            }
            if (id && line.startsWith("});")) {
                ACHIEV_LIST.add(new Achiev(Integer.parseInt(idStr), nameStr, descStr));
                nameStr = "";
                idStr = "";
                descStr = "";
                achievement = false;
                id = false;
                name = false;
                continue;
            }
        }
        Collections.sort(ACHIEV_LIST);
        for (Achiev a : ACHIEV_LIST)
            export.println(a.name + "|" + a.desc);
        export.flush();
        export.close();
    }

        /*<td>Don't stop me now
          </td>
          <td>Bake <b>100 quintillion</b> cookies in one ascension.
          </td>*/

    private static void addExtraAchievementData() throws IOException {
        PrintWriter export = new PrintWriter(Files.newOutputStream(Paths.get("achievementsExtended.txt")));
        for (Achiev a : ACHIEV_LIST) {
            String line;
            File fileHtml = new File("welp.html");
            BufferedReader readerHtml = new BufferedReader(new FileReader(fileHtml));
            String name;
            while (a.desc.isEmpty() && (line = readerHtml.readLine()) != null) {
                line = line.trim();
                if (!line.matches("^<tr.*>")) continue;
                line = readerHtml.readLine().trim();
                if (!line.matches("^<td.*>.+")) continue;
                line = readerHtml.readLine().trim();
                if (!line.matches("^</td.*>")) continue;
                line = readerHtml.readLine().trim();
                if (line.matches("^<td.*>.+")) {
                    name = line.replaceFirst("<td.*?>", "");
                    if (name.equalsIgnoreCase(a.name)) {
                        line = readerHtml.readLine().trim();
                        if (line.matches("^</td.*>")) {
                            line = readerHtml.readLine().trim();
                            if (line.matches("^<td.*>.+")) {
                                a.desc = line.replaceFirst("<td.*?>", "");
                                break;
                            }
                        }
                    }
                }
            }
            if (a.desc.isEmpty()) {
                System.out.println(a.name);
            }
            export.println(a.name + " | " + a.desc);
        }
        export.flush();
        export.close();
    }

}
