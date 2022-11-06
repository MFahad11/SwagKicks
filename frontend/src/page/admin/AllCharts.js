import React from 'react'
import BarChart from '../../components/admin/BarChart'
import LineChart from '../../components/admin/LineChart'
import PieChart from '../../components/admin/PieChart'

const AllCharts = () => {
  return (
    <>
        <br/>
      <BarChart/>
      <br/><br/>
      <LineChart/>
      <br/><br/>
      <PieChart/>
    </>
  )
}

export default AllCharts
