"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { DataTableFacetedFilter } from "../ui/data-table-faceted-filter";
import { ArtifactSets, ArtifactTypes, Stats } from "@/lib/interface";
import Link from "next/link";

interface ArtifacterDataTableToolbarProps<TData> {
  table: Table<TData>;
  types: ArtifactTypes[];
  sets: ArtifactSets[];
  mainStats: Stats[];
}

export function ArtifacterDataTableToolbar<TData>({
  table,
  types,
  sets,
  mainStats,
}: ArtifacterDataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const typeOptions = [];
  const setOptions = [];
  const mainStatOptions = [];

  for (const type of types) {
    typeOptions.push({ label: type.japanese, value: type.japanese });
  }
  for (const set of sets) {
    setOptions.push({ label: set.name, value: set.name });
  }
  for (const mainStat of mainStats) {
    mainStatOptions.push({
      label: mainStat.japanese,
      value: mainStat.japanese,
    });
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {table.getColumn("ArtifactTypes") && (
          <DataTableFacetedFilter
            column={table.getColumn("ArtifactTypes")}
            title="部位"
            options={typeOptions}
          />
        )}
        {table.getColumn("ArtifactSets") && (
          <DataTableFacetedFilter
            column={table.getColumn("ArtifactSets")}
            title="セット効果"
            options={setOptions}
          />
        )}
        {table.getColumn("Stats") && (
          <DataTableFacetedFilter
            column={table.getColumn("Stats")}
            title="メインステータス"
            options={mainStatOptions}
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
      <Button className="focus:shadow-inner" variant="outline" asChild>
        <Link href="artifacter/post/1/501">聖遺物を追加</Link>
      </Button>
    </div>
  );
}
