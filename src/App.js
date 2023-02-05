import React ,{ useState} from 'react';
import Navbar from './components/Navbar';
import {Login} from './components/Login';
import {Register} from './components/Register'; 
import {Main} from './components/Main';

function App() {
  const [currentForm, setCurrentForm]=useState("Login");
  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  const [Cpage,setCpage]=useState("loginpage");
  const togglepage=(pageName) =>{
    setCpage(pageName);
  }
  return (
    <>
    <Navbar />
    {
      Cpage ==="loginpage" ? <div className='app'>{
        currentForm ==="Login" ?<Login onFormSwitch={toggleForm} onPageSwitch={togglepage} />: <Register onFormSwitch={toggleForm} onPageSwitch={togglepage}/>
      }
      </div> : <Main />
    }
    </>    
  );
}

export default App;
