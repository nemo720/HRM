import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import ShowNotifications from './Notification.jsx'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <ShowNotifications />
        <TransactionChart />
      </div>
    </div>
  )
}
