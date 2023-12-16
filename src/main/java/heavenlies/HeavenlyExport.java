package heavenlies;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

public class HeavenlyExport {

    public static String printHeavenlyUpgrades(Path script) throws IOException {
        List<Heavenly> heavenlies = new ArrayList<>();

        BufferedReader reader = Files.newBufferedReader(script);
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
                heavenlies.add(new Heavenly(Integer.parseInt(idStr), Double.parseDouble(orderStr),
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
        reader.close();

        Collections.sort(heavenlies);

        List<String> fixes = Files.readAllLines(Paths.get("fixes.txt"));

        StringBuilder builder = new StringBuilder();
        for (Heavenly h : heavenlies) {
            for (Iterator<String> iter = fixes.iterator(); h.desc.isEmpty() && iter.hasNext(); ) {
                line = iter.next().trim();
                String[] split = (line + " ").split("\\|");
                if (h.name.equalsIgnoreCase(split[0])) {
                    h.name = split[1].isEmpty() ? h.name : split[1];
                    h.altName = split[2].isEmpty() ? h.altName : split[2];
                    h.desc = split[3].trim();
                }
            }

            builder.append("| ")
                    .append(h.name)
                    .append(" | ")
                    .append(String.format(Locale.ROOT, "%,d", h.cost))
                    .append(" | ")
                    .append(h.desc)
                    .append(!h.desc2.isEmpty() ? "<br><i>" + h.desc2 + "</i>" : "")
                    .append(" |")
                    .append('\n');
        }

        return builder.substring(0, builder.length() - 1);
    }

}
