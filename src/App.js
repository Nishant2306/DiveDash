// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home/Home";
import Test from "./components/Test.js";
import Login1 from "./components/Login/Login1";
import Login2 from "./components/Login/Login2";
import Error from "./components/Error/Error"
import Otp from "./components/Login/Otp"
import Dashboard from "./components/Dashboard/Dashboard.js"
import ApplicationPoolMain from "./components/ApplicationPool/ApplicationPoolMain";
import CandidateSearchIn from "./components/CandidateSearch/CandidateSearchIn"
import CandidateSearchMain from './components/CandidateSearch/CandidateSearchMain'
import DandI from './components/ApplicationPool/D&I' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DatasetUpload from "./Data/DatasetUpload"
import { AuthProvider } from "./components/Auth";
import DatasetIn from "./components/Dataset/DatasetIn";
import Dataset from "./components/Dataset/Dataset";
import Otp1 from "./components/Login/Otp1"
import Forecast from "./components/ApplicationPool/Forecast" 
// import MfaSetup from './components/Login/mfa'
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login1" element={<Login1 />} />
        <Route path="/Login2" element={<Login2 />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/ApplicationPool" element={<ApplicationPoolMain />} />
        <Route path="/DatasetUpload" element={<DatasetUpload />} />
        <Route path="/CandidateSearchIn" element={<CandidateSearchIn />} />
        <Route path="/CandidateSearch" element={<CandidateSearchMain />} />
        <Route path="/DandI" element={<DandI />} />
        <Route path="/DatasetIn" element={<DatasetIn />} />
        <Route path="/Dataset" element={<Dataset />} />
        <Route path="/Otp1" element={<Otp1 />} />
        <Route path="/Forecast" element={<Forecast />} />
        {/* <Route path="/mfa" element={<MfaSetup />} /> */}
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
