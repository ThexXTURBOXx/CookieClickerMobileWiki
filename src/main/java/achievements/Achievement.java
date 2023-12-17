package achievements;

import com.google.gson.annotations.SerializedName;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Achievement implements Comparable<Achievement> {
    public boolean unimplemented;
    public String name;
    public String pool;
    public String desc;
    @SerializedName("q")
    public String subDesc;
    public double order;
    public int[] icon;

    public boolean isShadow() {
        return pool.equalsIgnoreCase("shadow");
    }

    @Override
    public int compareTo(Achievement o) {
        if (isShadow() != o.isShadow()) return isShadow() ? 1 : -1;
        return Double.compare(order, o.order);
    }

}
