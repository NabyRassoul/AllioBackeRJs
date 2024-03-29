import './App.css';

import React ,{useEffect} from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Navbar, Sidebar, ThemeSetting } from './components';
import { Bon,Campagne, Prospectus, Fidelite,AllBonsTable  } from "./pages";
import Dashbord from "./pages/Dashboard/Dashbord.jsx";
import { useStateContext } from './contexts/ContextProvider';

const App = () => {

  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor,setCurrentMode]);
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''} >
    <BrowserRouter>
  <div className='flex relative dark:bg-main-dark-bg'>
     <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
     
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
               
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
           
     </div>
      {activeMenu ? (
        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>
          <Sidebar/>
        </div>
      ):( 
         <div className="w-0 dark:bg-secondary-dark-bg">
        <Sidebar/>
      </div>
      )}
      <div  className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar/>
            </div>
            <div>
            {themeSettings && (<ThemeSetting />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Dashbord />)} />
                <Route path="/dashbord" element={(<Dashbord />)} />

                {/* Pages */}
                <Route path="/bon" element={< Bon/>} />
                <Route path="/campagne" element={(<Campagne />)} />
                <Route path="/prospectus" element={(<Prospectus />)} />
                <Route path="/fidelite" element={(<Fidelite />)} />
                <Route path="/all-bons" element={(<AllBonsTable />)} />
              </Routes>
            </div>

      </div>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App

