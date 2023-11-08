import { Routes,  Route} from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Customers from './components/Customers'
import Income from './components/Income'
import Promote from './components/Promote'
import Help from './components/Help'

function App() {
    return (
       
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path="products" element={<Products />}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="income" element={<Income/>}/>
          <Route path="promote" element={<Promote/>}/>
          <Route path="help" element={<Help/>}/>

          </Route>
          <Route path="login" element={<div>this is login page</div> }/>

        </Routes>
    )
}

export default App
