import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home'
import Register from './Register'

document.title="ROC";

export default function DApp() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}/>
          <Route path="register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

const appAddress='e5c3a056ca5a682b717658049d149ca36d02044e'
const provider = new AuthProvider(`${appAddress}`) // required
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      {/* <App /> */}
      <Home />
    </ProvideAuth>
  </React.StrictMode>
);
reportWebVitals();
