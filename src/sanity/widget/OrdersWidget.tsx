"use client";

import { DashboardWidgetContainer } from "@sanity/dashboard";
import DashboardOrdersTable from "src/components/dashboard/DashboardOrdersTable";

export default function OrdersWidget() {
  return (
    <DashboardWidgetContainer header='Orders'>
      <div data-theme='light' style={{
        width: '100%',
        height: '100%',
      }}>
        <DashboardOrdersTable />
      </div>
    </DashboardWidgetContainer>
  );
}
