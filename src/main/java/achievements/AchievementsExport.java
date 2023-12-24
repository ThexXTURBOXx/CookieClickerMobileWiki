package achievements;

import com.google.gson.reflect.TypeToken;
import format.JSONFormatter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;

public class AchievementsExport {

    public final List<Achievement> achievements;

    public AchievementsExport() throws IOException {
        Type type = new TypeToken<List<Achievement>>() {
        }.getType();
        achievements = JSONFormatter.parse(Files.readString(Paths.get("json", "achievs.json")), type);
        Collections.sort(achievements);
    }

    public String formatAchievements() {
        StringBuilder builder = new StringBuilder();
        for (Achievement a : achievements) {
            builder.append("| ")
                    .append(a.unimplemented ? "~~" : "")
                    .append(a.name)
                    .append(a.isShadow() ? " [SHADOW]" : "")
                    .append(a.unimplemented ? "~~" : "")
                    .append(" | ")
                    .append(a.unimplemented ? "~~" : "")
                    .append(a.desc)
                    .append(!a.subDesc.isEmpty() ? "<br><i>" + a.subDesc + "</i>" : "")
                    .append(a.unimplemented ? "~~" : "")
                    .append(" |")
                    .append('\n');
        }
        return builder.substring(0, builder.length() - 1);
    }

}
