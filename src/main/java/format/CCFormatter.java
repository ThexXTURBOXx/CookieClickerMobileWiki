package format;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import org.apache.commons.text.StringSubstitutor;

public class CCFormatter {

    public static final DecimalFormat DECIMAL_FORMAT = new DecimalFormat("#,###",
            DecimalFormatSymbols.getInstance(Locale.ROOT));

    public static String formatTemplate(String template, String version, String device, String table) {
        Map<String, String> values = new HashMap<>();
        values.put("version", version);
        values.put("device", device);
        values.put("table", table);
        return new StringSubstitutor(values, "%(", ")").replace(template);
    }

}
