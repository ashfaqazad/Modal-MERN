import './App.css';
import '@fontsource/roboto';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
// import Signup from './Pages/Signup';
import ClickButton from './ClickButton';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <>

      <Router>
      <Navbar />
        <div>
          <Routes>
          <Route path='/' element={<Home/>} />
            {/* <Route path='/signup' element={<Signup />} /> */}
            {/* <Route path='/login' element={<Login />} /> Corrected component syntax */}
            <Route path='/clickbutton' element={<ClickButton />} /> {/* Corrected component syntax */}
          </Routes>
          

        </div>

      </Router>

    </>
  );
}

export default App;
