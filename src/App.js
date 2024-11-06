import logo from './logo.svg';
import './App.css';
// import UseMemo from './components/UseMemo';
// import LiftingStateUp from './components/LiftingStateUp';
import Header from './components/Header';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import SwiggyCorporate from './components/SwiggyCorporate';
import Search from "./components/Search";
import Offers from "./components/Offers";
import Help from "./components/Help";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Body from "./components/Body"

function App() {
  return (
    <div className="App">
     {/* <LiftingStateUp/> */}
     <Header/>
     <Outlet/>
     {/* <Body/> */}
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/swiggycorporate",
        element:<SwiggyCorporate/>
      },
      {
        path:"/search",
        element:<Search />
      },
      {
        path:"/offers",
        element:<Offers/>
      },
      {
        path:"/help",
        element:<Help/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      
    ],
  },
  
])

export default App;
