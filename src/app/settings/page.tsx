"use client";

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Setting = {
  category: string;
  value: string | number | boolean;
};

export const data: Setting[] = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: false,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];

export const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-5 w-full ">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default SettingsPage;
