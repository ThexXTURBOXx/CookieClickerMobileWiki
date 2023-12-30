package format;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import org.apache.commons.text.StringSubstitutor;
import org.graalvm.polyglot.Context;

public class CCFormatter {

    private final Context beautifyContext;

    public CCFormatter() throws IOException {
        beautifyContext = Context.create();
        beautifyContext.eval("js", FORMATTER_JS);
    }

    public String formatTemplate(String template, String version, String device, String table) {
        Map<String, String> values = new HashMap<>();
        values.put("version", version);
        values.put("device", device);
        values.put("table", table);
        return new StringSubstitutor(values, "%(", ")").replace(template);
    }

    public String beautify(double value) {
        return beautifyContext.eval("js", "B(" + value + ")").toString();
    }

    private static final String FORMATTER_JS = """
            //the old Beautify function from Cookie Clicker, shortened to B(value)
            //initially adapted from http://cookieclicker.wikia.com/wiki/Frozen_Cookies_%28JavaScript_Add-on%29
            function formatEveryThirdPower(notations)
            {
            	return function (val)
            	{
            		var base=0,notationValue='';
            		if (!isFinite(val)) return 'Inf.';
            		if (val>=1000000)
            		{
            			val/=1000;
            			while(Math.round(val)>=1000)
            			{
            				val/=1000;
            				base++;
            			}
            			if (base>=notations.length) {return 'Inf.';} else {notationValue=notations[base];}
            		}
            		return (Math.round(val*10)/10)+notationValue;
            	};
            }
                            
            function rawFormatter(val){return val>1000000000000?Math.round(val):(Math.round(val*1000)/1000);}
                            
            var formatLong=[' thousand',' million',' billion',' trillion',' quadrillion',' quintillion',' sextillion',' septillion',' octillion',' nonillion'];
            var prefixes=['','un','duo','tre','quattuor','quin','sex','septen','octo','novem'];
            var suffixes=['decillion','vigintillion','trigintillion','quadragintillion','quinquagintillion','sexagintillion','septuagintillion','octogintillion','nonagintillion'];
            for (var i in suffixes)
            {
            	for (var ii in prefixes)
            	{
            		formatLong.push(' '+prefixes[ii]+suffixes[i]);
            	}
            }
                            
            var formatShort=['k','M','B','T','Qa','Qi','Sx','Sp','Oc','No'];
            var prefixes=['','Un','Do','Tr','Qa','Qi','Sx','Sp','Oc','No'];
            var suffixes=['D','V','T','Qa','Qi','Sx','Sp','O','N'];
            for (var i in suffixes)
            {
            	for (var ii in prefixes)
            	{
            		formatShort.push(' '+prefixes[ii]+suffixes[i]);
            	}
            }
            formatShort[10]='Dc';
                            
                            
            var numberFormatters=
            [
            	formatEveryThirdPower(formatShort),
            	formatEveryThirdPower(formatLong),
            	rawFormatter
            ];
            var numberFormatter=numberFormatters[0];
            function Beautify(val,floats,format)
            {
            	var negative=(val<0);
            	var decimal='';
            	var fixed=val.toFixed(floats);
            	if (floats>0 && Math.abs(val)<1000 && Math.floor(fixed)!=fixed) decimal='.'+(fixed.toString()).split('.')[1];
            	val=Math.floor(Math.abs(val));
            	if (floats>0 && fixed==val+1) val++;
            	var formatter=format?numberFormatters[format]:numberFormatter;
            	var output=(val.toString().indexOf('e+')!=-1 && format==2)?val.toPrecision(3).toString():formatter(val).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g,',');
            	//var output=formatter(val).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g,',');
            	if (output=='0') negative=false;
            	return negative?'-'+output:output+decimal;
            }
            var B=Beautify;
            """;

}
