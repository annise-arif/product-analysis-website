import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
