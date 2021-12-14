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

    const navArgs = {
        navbarIsActive,
        updateNavbarActive: () => {
            setNavbarIsActive(!navbarIsActive)
        }
    };

    return (
    <NavbarContext.Provider value={navArgs}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="projects" element={<Index/>}/>
                <Route path="achievements" element={<Index/>}/>
                <Route path="links" element={<Index/>}/>
            </Routes>
        </BrowserRouter>
    </NavbarContext.Provider>
    );
}

export default App;
