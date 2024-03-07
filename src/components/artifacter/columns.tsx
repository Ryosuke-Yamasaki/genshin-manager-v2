"use client";

import { Artifacter } from "@/lib/interface";
import { FormatPercent, IntStatId } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Artifacter>[] = [
  {
    id: "ArtifactTypes",
    accessorFn: (row) => row.ArtifactTypes.japanese,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="部位" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "ArtifactSets",
    accessorFn: (row) => row.ArtifactSets.name,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="セット効果" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "Stats",
    accessorFn: (row) => row.Stats.japanese,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="メインステータス" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "score",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="スコア" />
    ),
  },
  {
    accessorKey: "ArtifacterSubOptions",
    header: "サブオプション",
    cell: ({ row }) => {
      const subOptions: {
        statId: number;
        value: string;
        Stats: { id: number; text: string };
      }[] = row.getValue("ArtifacterSubOptions");

      return (
        <div className="grid grid-cols-2 gap-x-2">
          {subOptions.map((subOption) => (
            <div
              key={subOption.statId}
              className="flex justify-between space-x-2"
            >
              <div>{subOption.Stats.text}</div>
              {IntStatId(subOption.statId.toString()) ? (
                <div>{subOption.value}</div>
              ) : (
                <div>{FormatPercent(Number(subOption.value))}</div>
              )}
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="作成日" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = date.toLocaleString();

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
