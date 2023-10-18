import React from 'react'
const ProductCellData = [
	{
		id: '1',
		product_id:"1236",
		Product_name:"Abstract 3D",
		Stock:"32 in stock",
		price:"$45.99",
		Total_sales:"20"
	},
	{
		id: '2',
		product_id:"7654",
		Product_name:"Sarphens illustration",
		Stock:"32 in stock",
		price:"$45.99",
		Total_sales:"20"
	},
	
]

function RecordProduct() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
    <strong className="text-gray-700 font-medium">Product Sell</strong>
    <div className="border-x border-gray-200 rounded-sm mt-3">
	
    
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							
							<th>Product Name</th>
							<th>Stock</th>
							<th>Price</th>
							<th>Total Sales</th>
						</tr>
					</thead>
					<tbody>
						{ProductCellData.map((product)=>(
							<tr key={product.id}>
								<td>{product.Product_name}
								<span className='flex flex-col text-gray-400'>lorem ipsum dolar sit amet </span>
								</td>
								<td>{product.Stock}</td>
								<td>{product.price}</td>
								<td>{product.Total_sales}</td>
							</tr>
						))}
					</tbody>
					
				</table>
			</div>
		</div>
    )
}

export default RecordProduct