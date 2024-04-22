import { StatDetailsProps } from "@/lib/interface";
import { getBaseStats } from "@/lib/utils";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatDetails: React.FC<StatDetailsProps> = ({ stats }) => {
  const data: {
    name: string;
    base: number;
    percent: number;
    flat: number;
  }[] = [];

  const baseStats = getBaseStats(stats);

  const baseStatsProps: { [K: string]: string } = {
    hp: "HP",
    atk: "攻撃力",
    def: "防御力",
  };

  Object.keys(baseStatsProps).map((prop) => {
    data.push({
      name: baseStatsProps[prop],
      base: baseStats[prop][0],
      percent: baseStats[prop][1],
      flat: baseStats[prop][2],
    });
  });

  return (
    <ResponsiveContainer
      width={404}
      height={202}
      className="border rounded-lg p-2"
    >
      <BarChart
        width={404}
        height={202}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="base" stackId="a" fill="#8884d8" />
        <Bar dataKey="percent" stackId="a" fill="#82ca9d" />
        <Bar dataKey="flat" stackId="a" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatDetails;
