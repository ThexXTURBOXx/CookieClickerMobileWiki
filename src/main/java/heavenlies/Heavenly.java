package heavenlies;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Heavenly implements Comparable<Heavenly> {
    public int id;
    public double order;
    public String name;
    public String altName;
    public String desc;
    public String desc2;
    public String[] parents;
    public long cost;

    @Override
    public int compareTo(Heavenly o) {
        return Double.compare(cost, o.cost);
    }

}
