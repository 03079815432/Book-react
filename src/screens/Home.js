import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.jpg'; // Importing logo.jpg

const Home = () => {
  const [searchId, setSearchId] = useState(''); // State variable to store the search ID entered by the admin
  const [searchedReview, setSearchedReview] = useState(null); // State variable to store the searched review

  // Dummy reviews data
  const reviews = [
    { id: 1, reviewer: 'Data Base', comment: 'Great book!' },
    { id: 2, reviewer: 'Data Science', comment: 'Excellent read!' },
    { id: 3, reviewer: 'HCI', comment: 'outstanding!' },
    { id: 4, reviewer: 'SQE', comment: 'Weldone!' },
    { id: 5, reviewer: 'SRE', comment: 'Great pdf book!' },
    { id: 6, reviewer: 'English', comment: 'Good!' },
    { id: 7, reviewer: 'Urdu', comment: 'Great book!' },
    { id: 8, reviewer: 'Data structure', comment: 'Excellent ' },
    // Add more reviews as needed
  ];

  // Function to handle search by review ID
  const handleSearchReview = () => {
    const foundReview = reviews.find(review => review.id === parseInt(searchId)); // Find the review with the entered ID
    setSearchedReview(foundReview); // Update the searchedReview state variable
  };

  // Animation for displaying the latest reviews
  const reviewsAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerText}>E-Book Reader & Downloader</h1>
      </div>

      {/* Main content */}
      <div style={styles.contentContainer}>
        {/* Profile Picture */}
        <div style={styles.profileContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>

        {/* Search by review ID */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
            placeholder="Enter Review ID"
            style={styles.input}
          />
          <button onClick={handleSearchReview} style={styles.searchButton}>
            Search Review
          </button>
        </div>

        {/* Display searched review or latest reviews */}
        {searchedReview ? ( // If a review is searched
          <div style={styles.searchedReview}>
            <h2 style={styles.searchedReviewTitle}>Searched Review</h2>
            <p>ID: {searchedReview.id}</p>
            <p>Reviewer: {searchedReview.reviewer}</p>
            <p>Comment: {searchedReview.comment}</p>
          </div>
        ) : ( // If no review is searched, display latest reviews
          <animated.div style={{ ...styles.reviewsContainer, ...reviewsAnimation }}>
            <h2 style={styles.reviewsTitle}>Latest Reviews</h2>
            <table className="table table-striped" style={{ backgroundColor: '#f9f9f9' }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Reviewer</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, index) => (
                  <tr key={index}>
                    <td>{review.id}</td>
                    <td>{review.reviewer}</td>
                    <td>{review.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </animated.div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3498db',
    padding: '20px',
    marginBottom: '20px',
  },
  headerText: {
    color: '#fff',
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: '10px',
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },
  searchContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  input: {
    padding: '8px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
  },
  searchButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  },
  searchedReview: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  searchedReviewTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  reviewsContainer: {
    marginTop: '30px',
    opacity: 0, // Starting opacity for the animation
  },
  reviewsTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
};

export default Home;
