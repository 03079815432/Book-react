import React, { useState, useEffect } from 'react';
import { storage } from "./Config"; // Import storage from firebase.js
import { ref, getDownloadURL, listAll } from "firebase/storage";
import 'bootstrap/dist/css/bootstrap.min.css';

function BookPage() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles(); // Fetch initial list of files when component mounts
  }, []);

  const fetchFiles = async () => {
    try {
      const filesRef = ref(storage, 'files');
      const filesList = await listAll(filesRef);
      const urls = await Promise.all(filesList.items.map(item => getDownloadURL(item)));
      setFiles(urls);
    } catch (error) {
      console.error('Error fetching files:', error);
      // Handle error
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {files.length > 0 && (
            <div className='mt-3'>
              {files.map((downloadURL, index) => (
                <div key={index} className="border p-3 mb-3">
                  <p>Download URL {index + 1}: <a href={downloadURL} target="_blank" rel="noopener noreferrer">{downloadURL}</a></p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-info mr-2" onClick={() => window.open(downloadURL, '_blank')}>Download</button>
                    <button className="btn btn-info" onClick={() => window.location.href = downloadURL}>View</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookPage;
