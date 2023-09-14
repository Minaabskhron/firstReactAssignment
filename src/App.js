import './App.css';
import Home from './Component/Home/Home';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';


const routers = createHashRouter([
  {path:"", element:<Layout/>,children:[
    {index:true, element:<Home/>},
    {path:"about", element:<About/>},
    {path:"portfolio", element:<Portfolio/>},
    {path:"contact", element:<Contact/>},
    {path:"*", element:<NotFound/>}
  ]}
])

function App() {
  return (
    <RouterProvider router={routers}></RouterProvider>
  );
}

export default App;
