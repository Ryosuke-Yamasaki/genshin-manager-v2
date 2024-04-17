import { BaseStatsProps } from "@/lib/interface";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";

const BaseStats: React.FC<BaseStatsProps> = ({ characterStats }) => {
  const baseStats = {
    attack: { value: 0, label: "" },
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableBody>
          {characterStats.map((stat) => (
            <TableRow key={stat.label}>
              <TableCell>{stat.label}</TableCell>
              <TableCell>{stat.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BaseStats;
