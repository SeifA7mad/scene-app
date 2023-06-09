'use client'

import { DashboardWidgetContainer } from '@sanity/dashboard'
import DashboardOrdersTable from 'src/components/dashboard/DashboardOrdersTable'

export default function OrdersWidget() {

  return (
    <DashboardWidgetContainer header="Orders">
      <DashboardOrdersTable />
    </DashboardWidgetContainer>
  )
}
