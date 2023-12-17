package upgrades;

import com.google.gson.annotations.SerializedName;
import java.math.BigDecimal;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Upgrade implements Comparable<Upgrade> {
    public boolean unimplemented;
    @SerializedName("effs")
    public List<List<String>> effects;
    public String pool;
    public BigDecimal cost;
    public double order;
    public int[] icon;
    public int id;
    public String name;
    @SerializedName("q")
    public String subDesc;
    public String desc;
    public List<Integer> children;

    public boolean isHeavenly() {
        return pool.equalsIgnoreCase("prestige");
    }

    @Override
    public int compareTo(Upgrade o) {
        if (!cost.equals(o.cost)) return cost.compareTo(o.cost);
        return Double.compare(order, o.order);
    }

}
