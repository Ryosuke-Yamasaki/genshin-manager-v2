"use client";

import { Character } from "@/lib/interface";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../ui/data-table-column-header";
import Link from "next/link";

export const characterColumns: ColumnDef<Character>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="名前" />
    ),
    cell: ({ row }) => {
      const data = row.original;
      const { id, name } = data;

      return (
        <Link
          href={`characters/${id}`}
          className="underline hover:decoration-2 hover:font-semibold"
        >
          {name}
        </Link>
      );
    },
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
