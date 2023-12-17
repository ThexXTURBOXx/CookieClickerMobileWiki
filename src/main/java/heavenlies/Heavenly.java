package heavenlies;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Heavenly implements Comparable<Heavenly> {
    public int id;
    public double order;
    public String name;
    public String altName;
    public String desc;
    public String desc2;
    public List<Integer> parents;
    public long cost;

    @Override
    public int compareTo(Heavenly o) {
        return Double.compare(cost, o.cost);
    }

}
