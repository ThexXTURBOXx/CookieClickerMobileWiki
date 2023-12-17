package achievements;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Achiev implements Comparable<Achiev> {
    public int id;
    public double order;
    public String name;
    public String altName;
    public String desc;
    public String desc2;
    public boolean shadow;

    @Override
    public int compareTo(Achiev o) {
        if (shadow != o.shadow) return shadow ? 1 : -1;
        return Double.compare(order, o.order);
    }

}
