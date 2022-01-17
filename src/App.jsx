
import './App.css';
import {AddingApp} from './components/AddingApp';
import {Home} from './components/Home';
import {Navbar} from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import {LogCom} from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Job Listing Application</h1>
      <Navbar />
     
      <Routes>
      <Route path="createjob" element={<AddingApp />}></Route >
        <Route path="/home" element={<Home />}></Route >
        <Route path="/login" element={<LogCom/>}></Route >
      </Routes>
    
    
    
    </div>
  );
}

export default App;
