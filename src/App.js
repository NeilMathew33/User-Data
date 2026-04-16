import logo from './logo.svg';
import './App.css';
import AddUserData from './Components/AddUserData';
import ViewAllUserData from './Components/ViewAllUserData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<AddUserData />} />
      <Route path="/ViewAll" element={<ViewAllUserData />} />
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
