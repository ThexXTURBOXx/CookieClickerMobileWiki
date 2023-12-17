package heavenlies;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.graalvm.polyglot.Context;

public class HeavenlyExport {

    public static String printHeavenlyUpgrades(Path script) throws IOException {
        Context ctx = Context.create();
        Map<Integer, Heavenly> heavenliesMap = new HashMap<>();

        try {
            var a = ctx.eval("js", Files.readString(Paths.get("test_data_scripts", "test_main_v7.23.js")));
            System.out.println(a);
        } catch (Throwable t) {
            t.printStackTrace();
        }

        BufferedReader reader = Files.newBufferedReader(script);
        String line;
        String nameStr = "";
        String idStr = "";
        String descStr = "";
        String desc2Str = "";
        String costStr = "";
        String orderStr = "";
        boolean willBeComment = false;
        boolean comment = false;
        boolean upgrade = false;
        boolean heavenly = false;
        List<String> parentsLines = new ArrayList<>();
        while ((line = reader.readLine()) != null) {
            line = line.trim();

            // Comment logic
            if (line.contains("//")) line = line.substring(0, line.indexOf("//"));
            line = line.replaceAll("/\\*.*\\*/", "");
            if (willBeComment) comment = true;
            if (line.contains("/*")) {
                willBeComment = true;
                line = line.substring(0, line.indexOf("/*"));
            }
            if (line.contains("*/")) {
                willBeComment = false;
                comment = false;
                line = line.substring(line.indexOf("*/") + 2);
            }
            if (comment) continue;

            if (line.startsWith("G.HeavenlyUpgradeParents")) {
                parentsLines.add(line);
            }
            if (line.startsWith("new G.Upgrade")) {
                upgrade = true;
                line = line.replaceAll("new\\s+G.Upgrade\\s*\\(\\s*\\{\\s*", "");
            }
            if (upgrade && line.startsWith("name:")) {
                nameStr = line.replaceFirst("name:\\s*`", "").replace("`,", "");
            }
            if (upgrade && line.startsWith("id:")) {
                idStr = line.replaceFirst("id:", "").replace(",", "");
            }
            if (upgrade && line.startsWith("desc:")) {
                descStr = line.replaceFirst("desc:\\s*`", "");
                descStr = descStr.substring(0, descStr.indexOf("`,"));
            }
            if (upgrade && line.startsWith("q:")) {
                desc2Str = line.replaceFirst("q:\\s*`", "");
                desc2Str = desc2Str.substring(0, desc2Str.indexOf("`,"));
            }
            if (upgrade && line.startsWith("cost:")) {
                costStr = line.replaceFirst("cost:\\s*", "").replace(",", "");
            }
            if (upgrade && line.startsWith("order:")) {
                orderStr = line.replaceFirst("order:\\s*", "").replace(",", "");
            }
            if (upgrade && line.startsWith("pool:")) {
                if (line.contains("'prestige'")) heavenly = true;
            }
            // These are not the real parents
            /*if (upgrade && line.startsWith("parents:")) {
                line = line.replaceFirst("parents:\\s*\\[", "");
                line = line.substring(0, line.indexOf("],"));
                parents = line.split(",");
                for (int i = 0; i < parents.length; ++i)
                    parents[i] = parents[i].substring(1, parents[i].length() - 1);
                continue;
            }*/
            if (upgrade && heavenly && line.startsWith("});")) {
                int id = Integer.parseInt(idStr);
                heavenliesMap.put(id, new Heavenly(id, Double.parseDouble(orderStr),
                        nameStr, "", descStr, desc2Str, new ArrayList<>(), Long.parseLong(costStr)));
                nameStr = "";
                idStr = "";
                descStr = "";
                desc2Str = "";
                orderStr = "";
                upgrade = false;
                heavenly = false;
                continue;
            }
        }
        reader.close();

        Pattern patternFull = Pattern.compile("^G\\.HeavenlyUpgradeParents\\s*=\\s*\\{(.*)};$");
        Pattern patternPatch = Pattern.compile("^G\\.HeavenlyUpgradeParents\\[(\\d+)]\\s*=\\s*\\[(.*)];$");
        for (String p : parentsLines) {
            Matcher mFull = patternFull.matcher(p);
            Matcher mPatch = patternPatch.matcher(p);
            if (mFull.matches()) {
                List<String> parents = Arrays.stream(mFull.group(1).split("\\s*,\\s*")).toList();
                System.out.println(parents);
            } else if (mPatch.matches()) {
                System.out.println(heavenliesMap);
                int toPatch = Integer.parseInt(mPatch.group(1));
                System.out.println(toPatch);
                heavenliesMap.get(toPatch).parents = Arrays.stream(mPatch.group(2).split("\\s*,\\s*"))
                        .map(Integer::parseInt).toList();
            } else {
                System.out.println("Parents not parsable: " + p);
            }
        }

        List<Heavenly> heavenlies = new ArrayList<>(heavenliesMap.values());
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
