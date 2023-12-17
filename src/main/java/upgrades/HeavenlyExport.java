package upgrades;

import com.google.gson.reflect.TypeToken;
import format.CCFormatter;
import format.JSONFormatter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayDeque;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Queue;
import java.util.Set;

public class HeavenlyExport {

    public static List<Upgrade> upgrades;

    public static String printHeavenlyUpgrades() throws IOException {
        Type type = new TypeToken<List<Upgrade>>() {
        }.getType();
        upgrades = JSONFormatter.parse(Files.readString(Paths.get("json", "upgrades.json")), type);

        Collections.sort(upgrades);

        StringBuilder builder = new StringBuilder();
        Set<Integer> done = new HashSet<>();
        Queue<Upgrade> toPrint = new ArrayDeque<>(upgrades.stream().filter(u -> u.name.equals("Legacy")).toList());
        while (!toPrint.isEmpty()) {
            Upgrade u = toPrint.poll();
            if (!done.add(u.id)) continue;

            if (!u.isHeavenly()) continue;
            if (u.name.startsWith("Permanent upgrade slot"))
                u.desc = "Placing an upgrade in this slot will make its effects <b>permanent</b> across all "
                         + "playthroughs.";

            builder.append("| ")
                    .append(u.unimplemented ? "~~" : "")
                    .append(u.name)
                    .append(u.unimplemented ? "~~" : "")
                    .append(" | ")
                    .append(u.unimplemented ? "~~" : "")
                    .append(CCFormatter.DECIMAL_FORMAT.format(u.cost))
                    .append(u.unimplemented ? "~~" : "")
                    .append(" | ")
                    .append(u.unimplemented ? "~~" : "")
                    .append(u.desc)
                    .append(!u.subDesc.isEmpty() ? "<br><i>" + u.subDesc + "</i>" : "")
                    .append(u.unimplemented ? "~~" : "")
                    .append(" |")
                    .append('\n');

            for (Upgrade u2 : upgrades) if (u.children.contains(u2.id)) toPrint.add(u2);
        }

        for (Upgrade u : upgrades) {
            if (!u.isHeavenly()) continue;
            if (done.contains(u.id)) continue;
            System.out.println(u.name);
        }

        return builder.substring(0, builder.length() - 1);
    }

}
