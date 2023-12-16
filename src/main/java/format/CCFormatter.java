package format;

import java.util.HashMap;
import java.util.Map;
import org.apache.commons.text.StringSubstitutor;

public class CCFormatter {

    public static String formatTemplate(String template, String version, String device, String table) {
        Map<String, String> values = new HashMap<>();
        values.put("version", version);
        values.put("device", device);
        values.put("table", table);
        return new StringSubstitutor(values, "%(", ")").replace(template);
    }

}
