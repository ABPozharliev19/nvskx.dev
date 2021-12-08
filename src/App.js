import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import React, {
    useState,
    createContext,

} from "react";

import Index from './pages/Index'

export const NavbarContext = createContext(false);

function App() {
    const [navbarIsActive, setNavbarIsActive] = useState(false);

  return (
    <NavbarContext.Provider value={{navbarIsActive, updateNavbarActive: () => {setNavbarIsActive(!navbarIsActive)}}}>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Index />}/>
         </Routes>
       </BrowserRouter>
    </NavbarContext.Provider>
  );
}

export default App;
