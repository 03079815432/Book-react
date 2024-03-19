import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BooksQAPage() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBookDetails();
    fetchQuestion();
  }, []);

  const fetchBookDetails = async () => {
    try {
      // Fetch book details from an API
      // Example:
      const response = await axios.get('https://api.example.com/book-details');
      setBookTitle(response.data.title);
      setBookAuthor(response.data.author);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  const fetchQuestion = async () => {
    try {
      // Fetch a random question related to the book from the Bard API
      const response = await axios.get('https://api.bard.com/questions/random');
      setQuestion(response.data.question);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const submitAnswer = async () => {
    setIsLoading(true);
    try {
      // Send the user's answer to the Bard API
      await axios.post('https://api.bard.com/answers', { question, answer });
      // Fetch a new question for the user
      fetchQuestion();
      // Reset the answer field
      setAnswer('');
    } catch (error) {
      console.error('Error submitting answer:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div>
      <h1>Books Q&A</h1>
      <h2>Book Details:</h2>
      <p>Title: {bookTitle}</p>
      <p>Author: {bookAuthor}</p>
      <h2>Question:</h2>
      <p>{question}</p>
      <form onSubmit={submitAnswer}>
        <label>
          Your Answer:
          <textarea value={answer} onChange={handleChange} rows="4" cols="50" />
        </label>
        <button type="submit" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit Answer'}</button>
      </form>
    </div>
  );
}

export default BooksQAPage;
