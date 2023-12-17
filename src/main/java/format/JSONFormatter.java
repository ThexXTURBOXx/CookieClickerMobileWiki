package format;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.lang.reflect.Type;

public class JSONFormatter {

    private static final Gson GSON = new GsonBuilder().create();

    public static String formatJSON(String json) {
        if (json.startsWith("`")) json = json.substring(1, json.length() - 1);
        json = json.replace("\\\\\"", "\\\"");
        json = json.replace("<div style=\\\"display:inline-block;background:url(img/cookicon.png);width:16px;"
                            + "height:16px;\\\"></div>", "\uD83C\uDF6A");
        return json.replace("<div class=\\\"line\\\"></div>", "<br>");
    }

    public static <T> T parse(String json, Type type) {
        return GSON.fromJson(formatJSON(json), type);
    }

}
