import logo from './logo.svg';
import './App.css';
//import ReactHooks from './Hooks/ReactHooks';
//import Child from './Hooks/Child';
//import FormCmp from './Components/FormCmp';
import Header from './Components/Routerdom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Header />
     </BrowserRouter>
    </div>
  );
}

export default App;
