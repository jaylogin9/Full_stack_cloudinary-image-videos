import {BrowserRouter, Routes,Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Display from './pages/Display';
import Register from './pages/Register';
import Header from './pages/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/display/:id" element={<Display />}/>
      </Routes>
    </div>
     </BrowserRouter>
    
  );
}

export default App;
