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
import java.util.Locale;
import lombok.AllArgsConstructor;

public class Main {

    private static final File FILE = new File("data_v7.23.js");

    public static void main(String[] args) throws IOException {
        printHeavenlyUpgrades();
        printAchievements();
        addExtraAchievementData();
    }

    private static final List<Heavenly> HEAVENLY_LIST = new ArrayList<>();

    @AllArgsConstructor
    private static class Heavenly implements Comparable<Heavenly> {
        private int id;
        private double order;
        private String name;
        private String altName;
        private String desc;
        private String desc2;
        private String[] parents;
        private long cost;

        @Override
        public int compareTo(Heavenly o) {
            return Double.compare(cost, o.cost);
        }
    }

    private static void printHeavenlyUpgrades() throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(FILE));
        PrintWriter export = new PrintWriter(Files.newOutputStream(Paths.get("heavenly.txt")));
        String line;
        String nameStr = "";
        String idStr = "";
        String descStr = "";
        String desc2Str = "";
        String costStr = "";
        String orderStr = "";
        String[] parents = new String[0];
        boolean upgrade = false;
        boolean heavenly = false;
        while ((line = reader.readLine()) != null) {
            line = line.trim();
            if (line.startsWith("new G.Upgrade")) {
                upgrade = true;
                continue;
            }
            if (upgrade && line.startsWith("name:")) {
                nameStr = line.replaceFirst("name:\\s*`", "").replace("`,", "");
                continue;
            }
            if (upgrade && line.startsWith("id:")) {
                idStr = line.replaceFirst("id:", "").replace(",", "");
                continue;
            }
            if (upgrade && line.startsWith("desc:")) {
                descStr = line.replaceFirst("desc:\\s*`", "");
                descStr = descStr.substring(0, descStr.indexOf("`,"));
                continue;
            }
            if (upgrade && line.startsWith("q:")) {
                desc2Str = line.replaceFirst("q:\\s*`", "");
                desc2Str = desc2Str.substring(0, desc2Str.indexOf("`,"));
                continue;
            }
            if (upgrade && line.startsWith("cost:")) {
                costStr = line.replaceFirst("cost:\\s*", "").replace(",", "");
                continue;
            }
            if (upgrade && line.startsWith("order:")) {
                orderStr = line.replaceFirst("order:\\s*", "").replace(",", "");
                continue;
            }
            if (upgrade && line.startsWith("pool:")) {
                if (line.contains("'prestige'")) heavenly = true;
                continue;
            }
            if (upgrade && line.startsWith("parents:")) {
                line = line.replaceFirst("parents:\\s*\\[", "");
                line = line.substring(0, line.indexOf("],"));
                parents = line.split(",");
                for (int i = 0; i < parents.length; ++i)
                    parents[i] = parents[i].substring(1, parents[i].length() - 1);
                continue;
            }
            if (upgrade && heavenly && line.startsWith("});")) {
                HEAVENLY_LIST.add(new Heavenly(Integer.parseInt(idStr), Double.parseDouble(orderStr),
                        nameStr, "", descStr, desc2Str, parents, Long.parseLong(costStr)));
                nameStr = "";
                idStr = "";
                descStr = "";
                desc2Str = "";
                orderStr = "";
                // Parents are not entirely correct... They are really stored in G.HeavenlyUpgradeParents
                parents = new String[0];
                upgrade = false;
                heavenly = false;
                continue;
            }
        }
        Collections.sort(HEAVENLY_LIST);

        for (Heavenly h : HEAVENLY_LIST) {
            File fileFixes = new File("fixes.txt");
            reader = new BufferedReader(new FileReader(fileFixes));
            while (h.desc.isEmpty() && (line = reader.readLine()) != null) {
                String[] split = (line.trim() + " ").split("\\|");
                if (h.name.equalsIgnoreCase(split[0])) {
                    h.name = split[1].isEmpty() ? h.name : split[1];
                    h.altName = split[2].isEmpty() ? h.altName : split[2];
                    h.desc = split[3].trim();
                }
            }
            reader.close();
        }

        for (Heavenly h : HEAVENLY_LIST)
            export.println(h.name + " | " + String.format(Locale.ROOT, "%,d", h.cost) + " | " + h.desc +
                           (!h.desc2.isEmpty() ? "<br><i>" + h.desc2 + "</i>" : ""));
        export.flush();
        export.close();
    }

    private static final List<Achiev> ACHIEV_LIST = new ArrayList<>();

    @AllArgsConstructor
    private static class Achiev implements Comparable<Achiev> {
        private int id;
        private double order;
        private String name;
        private String altName;
        private String desc;
        private String desc2;
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
        String desc2Str = "";
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
            if (achievement && line.startsWith("q:")) {
                desc2Str = line.replaceFirst("q:\\s*`", "").replace("`,", "");
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
                        nameStr, "", descStr, desc2Str, shadow));
                nameStr = "";
                idStr = "";
                descStr = "";
                desc2Str = "";
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
                    a.altName = split[2].isEmpty() ? a.altName : split[2];
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
                        if (name.equalsIgnoreCase(a.name) || name.equalsIgnoreCase(a.altName)) {
                            line = reader.readLine().trim();
                            if (line.matches("^</td.*>")) {
                                line = reader.readLine().trim();
                                if (line.matches("^<td.*>.+")) {
                                    a.desc = line.replaceFirst("<td.*?>", "");
                                    if (a.desc.contains(a.desc2)) {
                                        a.desc = a.desc.replace("<br><i>" + a.desc2 + "</i>", "");
                                        a.desc = a.desc.replace("<br><i>\"" + a.desc2 + "\"</i>", "");
                                    }
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
            if (a.desc.contains("<br>") && !a.desc2.isEmpty() && !a.name.equals("Cookie-dunker")) {
                // Cookie-dunker is correct as-is
                System.out.println(a.name);
            }
            a.desc = a.desc.replace("<div class=\"line\"></div>", "<br>");
            export.println(a.name + (a.shadow ? " [SHADOW]" : "") + " | " + a.desc +
                           (!a.desc2.isEmpty() ? "<br><i>" + a.desc2 + "</i>" : ""));
        }
        export.flush();
        export.close();
    }

}
