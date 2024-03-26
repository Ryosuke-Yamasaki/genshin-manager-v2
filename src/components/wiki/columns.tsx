"use client";

import { Character } from "@/lib/interface";
import { FormatPercent, IntStatId } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../ui/data-table-column-header";
import { DataTableRowActions } from "../ui/data-table-row-actions";

export const characterColumns: ColumnDef<Character>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="名前" />
    ),
  },
  {
    id: "star",
    accessorFn: (row) => row.star.toString(),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="レア度" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "Visions",
    accessorFn: (row) => row.Visions.japanese,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="元素" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "WeaponTypes",
    accessorFn: (row) => row.WeaponTypes.japanese,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="武器" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "Genders",
    accessorFn: (row) => row.Genders.japanese,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="性別" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "Regions",
    accessorFn: (row) => row.Regions?.japanese,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="国" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "affiliation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="所属" />
    ),
  },
  {
    id: "CharacterBaseHps",
    accessorFn: (row) => row.CharacterBaseHps.level90_90.toFixed(0),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="HP" />
    ),
  },
  {
    id: "CharacterBaseAttacks",
    accessorFn: (row) => row.CharacterBaseAttacks.level90_90.toFixed(0),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="攻撃力" />
    ),
  },
  {
    id: "CharacterBaseDefenses",
    accessorFn: (row) => row.CharacterBaseDefenses.level90_90.toFixed(0),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="防御力" />
    ),
  },
  {
    id: "CharacterAscensionBonusStats",
    accessorFn: (row) => row.CharacterAscensionBonusStats.Stats.text,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="突破ステータス" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
