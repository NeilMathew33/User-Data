import logo from './logo.svg';
import './App.css';
import AddUserData from './Components/AddUserData';
import ViewAllUserData from './Components/ViewAllUserData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddUserData />} />
      <Route path="/ViewAll" element={<ViewAllUserData />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
