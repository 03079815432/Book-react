// Welcome.js

import React from 'react';
import EnglishImage from './English.jpeg'; // Import the image file

// Component definition
const Welcome = () => {
  return (
    <div style={styles.welcome}>
      <h1>Welcome to our EBook Reader & Downloader</h1>
      <p>Explore our vast collection of ebooks on various topics.</p>
      <div style={styles.ebookDetails}>
        <div className="ebook-cover">
          {/* Use the imported image */}
          <img src={EnglishImage} alt="Ebook Cover" style={styles.coverImage} />
        </div>
        <div style={styles.ebookInfo}>
          <h2>Ebook Title</h2>
          <p>Author: Mohsin</p>
          <p>Published: January 1, 2024</p>
          <p>Genre: Fiction</p>
          <button style={styles.button}>Details</button>
        </div>
      </div>
    </div>
  );
};

// Styling
const styles = {
  welcome: {
    textAlign: 'center',
  },
  ebookDetails: {
    display: 'inline-block',
    marginTop: '20px',
  },
  ebookInfo: {
    marginLeft: '20px',
    display: 'inline-block',
    verticalAlign: 'top',
  },
  coverImage: {
    border: '2px solid red', // Red border
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', // Shadow effect
    maxWidth: '200px', // Adjust the max-width if needed
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Welcome;
