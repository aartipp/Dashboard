
import React from 'react';


import { PieChart, Series, Tooltip } from 'devextreme-react/pie-chart';
import {  ResponsiveContainer } from 'recharts'


const CustomerData = [
	{
	  country: "China",
	  amount:215
  
	},
	{
	  country: "United States",
	  amount: 716
	},
	{
	  country: "India",
	  amount:  1002
	}
  ]

const contentTemplate = (data) => {
  return data.argumentText;
}

function BuyerProfileChart() {
  return (
	<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
 			<strong className="text-gray-700 font-medium">Customers</strong>
            <span className='flex flex-col text-sm text-gray-400'>Customers that buy products</span>
		<div className="mt-3 w-full flex-1 text-xs">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={300} className=' items-center'
        dataSource={CustomerData}
        type="doughnut"
      
      >
        <Series 
          argumentField="country" 
          valueField="amount"
        >
        </Series>
        <Tooltip
          enabled={true}
          contentTemplate={contentTemplate}
        >
        </Tooltip>
      </PieChart>
    </ResponsiveContainer>
	</div>
	</div>
		
  );
}

export default BuyerProfileChart;