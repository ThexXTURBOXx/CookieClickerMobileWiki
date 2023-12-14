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
import lombok.AllArgsConstructor;

public class Main {

    private static final File FILE = new File("data_v7.23.js");

    public static void main(String[] args) throws IOException {
        printHeavenlyUpgrades();
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

    @AllArgsConstructor
    private static class Achiev implements Comparable<Achiev> {
        private int id;
        private double order;
        private String name;
        private String name2;
        private String desc;
        private boolean shadow;

        @Override
        public int compareTo(Achiev o) {
            if (shadow != o.shadow) return shadow ? 1 : -1;
            return Double.compare(order, o.order);
        }
    }

    private static void printAchievements() throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(FILE));
        PrintWriter export = new PrintWriter(Files.newOutputStream(Paths.get("achievements_v7.23.txt")));
        String line;
        String nameStr = "";
        String idStr = "";
        String descStr = "";
        String orderStr = "";
        boolean shadow = false;
        boolean achievement = false;
        while ((line = reader.readLine()) != null) {
            line = line.trim();
            if (line.startsWith("new G.Achiev")) {
                achievement = true;
                continue;
            }
            if (achievement && line.startsWith("name:")) {
                nameStr = line.replaceFirst("name:\\s*`", "").replace("`,", "");
                continue;
            }
            if (achievement && line.startsWith("id:")) {
                idStr = line.replaceFirst("id:", "").replace(",", "");
                continue;
            }
            if (achievement && line.startsWith("desc:")) {
                descStr = line.replaceFirst("desc:\\s*`", "").replace("`,", "");
                continue;
            }
            if (achievement && line.startsWith("order:")) {
                orderStr = line.replaceFirst("order:\\s*", "").replace(",", "");
                continue;
            }
            if (achievement && line.startsWith("pool:")) {
                if (line.contains("shadow")) shadow = true;
                continue;
            }
            if (achievement && line.startsWith("});")) {
                ACHIEV_LIST.add(new Achiev(Integer.parseInt(idStr), Double.parseDouble(orderStr),
                        nameStr, "", descStr, shadow));
                nameStr = "";
                idStr = "";
                descStr = "";
                orderStr = "";
                shadow = false;
                achievement = false;
                continue;
            }
        }
        Collections.sort(ACHIEV_LIST);
        for (Achiev a : ACHIEV_LIST)
            export.println(a.name + "|" + a.desc);
        export.flush();
        export.close();
    }

    private static void addExtraAchievementData() throws IOException {
        PrintWriter export = new PrintWriter(Files.newOutputStream(Paths.get("achievementsExtended.txt")));
        for (Achiev a : ACHIEV_LIST) {
            String line;
            File fileFixes = new File("fixes.txt");
            BufferedReader reader = new BufferedReader(new FileReader(fileFixes));
            while (a.desc.isEmpty() && (line = reader.readLine()) != null) {
                String[] split = (line.trim() + " ").split("\\|");
                if (a.name.equalsIgnoreCase(split[0])) {
                    a.name = split[1].isEmpty() ? a.name : split[1];
                    a.name2 = split[2].isEmpty() ? a.name2 : split[2];
                    a.desc = split[3].trim();
                }
            }
            reader.close();
            if (a.desc.isEmpty()) {
                File fileHtml = new File("welp.html");
                reader = new BufferedReader(new FileReader(fileHtml));
                while (a.desc.isEmpty() && (line = reader.readLine()) != null) {
                    line = line.trim();
                    if (!line.matches("^<tr.*>")) continue;
                    line = reader.readLine().trim();
                    if (!line.matches("^<td.*>.+")) continue;
                    line = reader.readLine().trim();
                    if (!line.matches("^</td.*>")) continue;
                    line = reader.readLine().trim();
                    if (line.matches("^<td.*>.+")) {
                        String name = line.replaceFirst("<td.*?>", "");
                        if (name.equalsIgnoreCase(a.name) || name.equalsIgnoreCase(a.name2)) {
                            line = reader.readLine().trim();
                            if (line.matches("^</td.*>")) {
                                line = reader.readLine().trim();
                                if (line.matches("^<td.*>.+")) {
                                    a.desc = line.replaceFirst("<td.*?>", "");
                                }
                            }
                        }
                    }
                }
                reader.close();
            }
            if (a.desc.isEmpty()) {
                System.out.println(a.name);
            }
            a.desc = a.desc.replace("<div class=\"line\"></div>", "<br>");
            export.println(a.name + (a.shadow ? " [SHADOW]" : "") + " | " + a.desc);
        }
        export.flush();
        export.close();
    }

}
