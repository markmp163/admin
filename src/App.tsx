import './App.css';
import './styles/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import AppAddToken from 'pages/AddToken';
import Customers from 'pages/Customers';
import AddPairCoin from 'pages/AddPairCoin';
import Missions from 'pages/Missions';
import Configuration from 'pages/Configuration';
import Auth from 'pages/Auth';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-token" element={<AppAddToken />} />
        <Route path="/add-pair-coin" element={<AddPairCoin />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
