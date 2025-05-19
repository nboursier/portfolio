import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Error from './pages/Error';
import ProjectDetails from './pages/ProjectDetails';
import LanguageContextProvider from './context/Languagecontext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <LanguageContextProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
        </Router>
    </LanguageContextProvider>    
    </React.StrictMode>,
);