import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Task from './components/Task'
// import About from './components/About'
import Add from './components/Add'

const router = createBrowserRouter(
  [
    {path: '/',element:<div><Navbar /><Task/></div>},
    {path: '/addtask',element:<div><Navbar /><Add/></div>}
  ]
);
function App() {
  return(
   <div className=' bg-linear-to-br from-[#153677] to-[#4e085f] h-screen'>
    <RouterProvider router={router}/>
   </div>
  )
}

export default App
