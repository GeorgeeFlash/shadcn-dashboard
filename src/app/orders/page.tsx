"use client";

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const data: Payment[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2024-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2024-01-20",
    method: "Credit Card",
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2024-3-15",
    method: "Stripe",
  },
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2024-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2024-01-20",
    method: "Credit Card",
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2024-3-15",
    method: "Stripe",
  },
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2024-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2024-01-20",
    method: "Paypal",
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2024-3-15",
    method: "Mobile Money",
  },
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2024-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2024-01-20",
    method: "Credit Card",
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2024-3-15",
    method: "Stripe",
  },
];

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

const OrdersPage = () => {
  return (
    <div className="flex flex-col gap-5 w-full ">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default OrdersPage;
