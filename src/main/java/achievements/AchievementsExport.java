package achievements;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class AchievementsExport {

    public static String formatAchievements(Path script) throws IOException {
        List<Achiev> achievs = new ArrayList<>();

        BufferedReader reader = Files.newBufferedReader(script);
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
                achievs.add(new Achiev(Integer.parseInt(idStr), Double.parseDouble(orderStr),
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
        reader.close();

        Collections.sort(achievs);

        List<String> fixes = Files.readAllLines(Paths.get("fixes.txt"));
        InputStream stream = URI.create("https://cookieclicker.fandom.com/wiki/Achievement").toURL().openStream();
        List<String> ccWikiHtml = new BufferedReader(new InputStreamReader(stream)).lines().toList();

        StringBuilder builder = new StringBuilder();
        for (Achiev a : achievs) {
            for (Iterator<String> iter = fixes.iterator(); a.desc.isEmpty() && iter.hasNext(); ) {
                line = iter.next().trim();
                String[] split = (line + " ").split("\\|");
                if (a.name.equalsIgnoreCase(split[0])) {
                    a.name = split[1].isEmpty() ? a.name : split[1];
                    a.altName = split[2].isEmpty() ? a.altName : split[2];
                    a.desc = split[3].trim();
                }
            }
            if (a.desc.isEmpty()) {
                for (Iterator<String> iter = ccWikiHtml.iterator(); a.desc.isEmpty() && iter.hasNext(); ) {
                    line = iter.next().trim();
                    if (!line.matches("^<tr.*>")) continue;
                    line = iter.next().trim();
                    if (!line.matches("^<td.*>.+")) continue;
                    line = iter.next().trim();
                    if (!line.matches("^</td.*>")) continue;
                    line = iter.next().trim();
                    if (line.matches("^<td.*>.+")) {
                        String name = line.replaceFirst("<td.*?>", "");
                        if (name.equalsIgnoreCase(a.name) || name.equalsIgnoreCase(a.altName)) {
                            line = iter.next().trim();
                            if (line.matches("^</td.*>")) {
                                line = iter.next().trim();
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
            }
            if (a.desc.isEmpty()) {
                System.out.println(a.name);
            }
            if (a.desc.contains("<br>") && !a.desc2.isEmpty() && !a.name.equals("Cookie-dunker")) {
                // Cookie-dunker is correct as-is
                System.out.println(a.name);
            }
            a.desc = a.desc.replace("<div class=\"line\"></div>", "<br>");

            builder.append("| ")
                    .append(a.name)
                    .append(a.shadow ? " [SHADOW]" : "")
                    .append(" | ")
                    .append(a.desc)
                    .append(!a.desc2.isEmpty() ? "<br><i>" + a.desc2 + "</i>" : "")
                    .append(" |")
                    .append('\n');
        }

        return builder.substring(0, builder.length() - 1);
    }

}
