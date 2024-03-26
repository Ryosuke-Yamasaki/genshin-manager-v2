"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { DataTableFacetedFilter } from "../ui/data-table-faceted-filter";
import { ArtifactSets, ArtifactTypes, Stats } from "@/lib/interface";
import Link from "next/link";

interface CharacterDataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function CharacterDataTableToolbar<TData>({
  table,
}: CharacterDataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const starOptions = [
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];

  const visionOptions = [
    { label: "炎", value: "炎" },
    { label: "水", value: "水" },
    { label: "氷", value: "氷" },
    { label: "雷", value: "雷" },
    { label: "風", value: "風" },
    { label: "岩", value: "岩" },
    { label: "草", value: "草" },
  ];

  const weaponTypeOptions = [
    { label: "片手剣", value: "片手剣" },
    { label: "両手剣", value: "両手剣" },
    { label: "長柄武器", value: "長柄武器" },
    { label: "法器", value: "法器" },
    { label: "弓", value: "弓" },
  ];

  const genderOptions = [
    { label: "男性", value: "男性" },
    { label: "女性", value: "女性" },
  ];

  const regionOptions = [
    { label: "モンド", value: "モンド" },
    { label: "璃月", value: "璃月" },
    { label: "稲妻", value: "稲妻" },
    { label: "スメール", value: "スメール" },
    { label: "フォンテーヌ", value: "フォンテーヌ" },
    { label: "ナタ", value: "ナタ" },
    { label: "スネージナヤ", value: "スネージナヤ" },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {table.getColumn("star") && (
          <DataTableFacetedFilter
            column={table.getColumn("star")}
            title="レア度"
            options={starOptions}
          />
        )}
        {table.getColumn("Visions") && (
          <DataTableFacetedFilter
            column={table.getColumn("Visions")}
            title="元素"
            options={visionOptions}
          />
        )}
        {table.getColumn("WeaponTypes") && (
          <DataTableFacetedFilter
            column={table.getColumn("WeaponTypes")}
            title="武器"
            options={weaponTypeOptions}
          />
        )}
        {table.getColumn("Genders") && (
          <DataTableFacetedFilter
            column={table.getColumn("Genders")}
            title="性別"
            options={genderOptions}
          />
        )}
        {table.getColumn("Regions") && (
          <DataTableFacetedFilter
            column={table.getColumn("Regions")}
            title="国"
            options={regionOptions}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
