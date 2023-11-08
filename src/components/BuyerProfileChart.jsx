
import React from 'react';
import Chart from 'react-apexcharts';



import {  ResponsiveContainer } from 'recharts'




function BuyerProfileChart() {
  return (
	<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
 			<strong className="text-gray-700 font-medium">Customers</strong>
            <span className='flex flex-col text-sm text-gray-400'>Customers that buy products</span>
		<div className="mt-3 w-full flex-1 text-xs">
    <ResponsiveContainer width="100%" height="100%">
    <Chart
type="donut"
width={400}
height={400}
series={[45,67,89,34,43]}
options={{
  labels:['usa','china','India','russia','banglore'],


  plotOptions:{
    pie:{
      donut:{
        labels:{
          Show:true,
          total:{
            show:true,
            fontSize:25,
            color:'#f90000'
          }
        }
      }
    }
  }
}}

/>
    </ResponsiveContainer>
	</div>
	</div>
		
  );
}

export default BuyerProfileChart;




