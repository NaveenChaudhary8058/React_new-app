
// import './App.css';

// // import Sidebar from './Project1/Sidebar';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Dashboard from './Project_1/DashBoard/Dashboard';
// import Inbox from './Project_1/Inbox/Inbox';
// import Products from './Project_1/Products/Products';
// import Customers from './Project_1/Customers/Customers';
// import Orders from './Project_1/Orders/Orders';
// import Accounts from './Project_1/Accounts/Accounts';
// import Reports from './Project_1/Reports/Reports';
// import Myplans from './Project_1/My_Plans/Myplans';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Dashboard/>} />
//         <Route path='/Inbox' element={<Inbox/>} />
//         <Route path='/Products' element={<Products/>} />
//         <Route path='Customer' element={<Customers/>}/>
//         <Route path='Orders' element={<Orders/>}/>
//         <Route path='Accounts' element={<Accounts/>}/>
//         <Route path='Reports' element={<Reports/>}/>
//         <Route path='MyPlans' element={<Myplans/>}/>
        
//       </Routes>
      
//       </BrowserRouter>
       
      
//     </div>
//   );
// }

// export default App;

import React from 'react'
import GetApi from './Shivraj_Api/GetApi'

const App = () => {
  return (
    <div>
      <GetApi/>
    </div>
  )
}

export default App

