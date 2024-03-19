import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome'; // Import the Welcome component
import Home from './screens/Home';
import UploadBook from './UploadBook';
import About from './screens/About';
import Contact from './screens/Contact';
import BooksQAPage from './screens/BooksQAPage'; // Import the BooksQAPage component
import Login from './screens/Login'; // Import the Login component
import BookPage from './BookPage'; // Import the BookPage component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Define state for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic here
    // For simplicity, let's assume login is successful
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {isLoggedIn && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/upload">UploadBook</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/booksqa">Books Q&A</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Add Welcome component before Routes */}
        <Welcome />

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            {isLoggedIn ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/BookPage" element={<BookPage />} />
                <Route path="/upload" element={<UploadBook />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booksqa" element={<BooksQAPage />} />
              </>
            ) : (
              <Route path="*" element={<Login onLogin={handleLogin} />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
