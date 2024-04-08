
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
      <>
       
      <div className="App">
        <BrowserRouter>
          <Sidebar></Sidebar>
        </BrowserRouter> 
      </div>
       
      </>
  );
}

export default App;
