import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/loginpage/LoginPage';
import VerificationPage from './pages/verificationpage/VerificationPage';
import ProfileSetup from './pages/profilesetup/ProfileSetup';
import Results from './pages/Resultspage/Results';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ProfilePage from './pages/profilepage/ProfilePage';
import Drawer from './components/drawer/Drawer';

function App() {
  return (
    <Router>
      <Drawer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/profileSetup" element={<ProfileSetup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
