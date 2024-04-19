import { BaseStatsProps } from "@/lib/interface";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { FormatPercent } from "@/lib/utils";

const BaseStats: React.FC<BaseStatsProps> = ({ contexts }) => {
  return (
    <div className="border rounded-lg p-2">
      <Table>
        <TableBody>
          {contexts.map((context) => (
            <TableRow key={context.label}>
              <TableCell className="py-1">{context.label}</TableCell>
              <TableCell className="py-1">
                {context.format
                  ? FormatPercent(context.value)
                  : context.value.toFixed(0)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BaseStats;
