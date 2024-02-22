"use client";

import { Artifacter } from "@/lib/interface";
import { FormatPercent, IntStatId } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../ui/data-table-column-header";

export const columns: ColumnDef<Artifacter>[] = [
  {
    accessorKey: "ArtifactTypes",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="部位" />
    ),
    cell: ({ row }) => {
      const type: { id: number; japanese: string } =
        row.getValue("ArtifactTypes");
      return <div>{type.japanese}</div>;
    },
  },
  {
    accessorKey: "ArtifactSets",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="セット効果" />
    ),
    cell: ({ row }) => {
      const set: { id: number; name: string } = row.getValue("ArtifactSets");
      return <div>{set.name}</div>;
    },
  },
  {
    accessorKey: "Stats",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="メインオプション" />
    ),
    cell: ({ row }) => {
      const mainStat: { id: number; text: string } = row.getValue("Stats");
      return <div>{mainStat.text}</div>;
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
        statId: string;
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
              {IntStatId(subOption.statId) ? (
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
];
