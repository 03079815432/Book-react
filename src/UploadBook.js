import React, { useState, useEffect } from 'react';
import { storage } from "./Config"; // Import storage from firebase.js
import { ref, uploadBytesResumable, getDownloadURL, deleteObject, listAll } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function UploadBook() {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [editingName, setEditingName] = useState(null);
  const [newName, setNewName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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

  const uploadFile = () => {
    if (!file) return;

    const storageRef = storage;
    const fileRef = ref(storageRef, 'files/' + uuidv4());
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.error(error);
        alert("File upload failed! Please try again.");
      },
      () => {
        console.log("Upload completed successfully");
        alert("File uploaded successfully!");
        setFile(null);
        setProgress(0);
        fetchFiles(); // Refresh file list after upload
      }
    );
  }

  const deleteFile = async (url) => {
    try {
      const fileRef = ref(storage, url);
      await deleteObject(fileRef);
      console.log('File deleted successfully');
      alert("File deleted successfully!");
      fetchFiles(); // Refresh file list after deletion
    } catch (error) {
      console.error('Error deleting file:', error);
      alert("Error deleting file. Please try again.");
    }
  }

  const viewPDF = (url) => {
    window.open(url, '_blank');
  }

  const editPDFName = (url) => {
    setEditingName(url);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const saveNameChange = async () => {
    try {
      const fileRef = ref(storage, editingName);
      await fileRef.updateMetadata({
        customMetadata: {
          name: newName
        }
      });
      setSuccessMessage('PDF name changed successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      setEditingName(null);
      setNewName('');
      fetchFiles(); // Refresh file list after name change
    } catch (error) {
      console.error('Error changing PDF name:', error);
      alert("pdf name  successfully changed");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="file"
            className="form-control-file"
            id="fileUpload"
            accept=".pdf"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
          <button
            className="btn btn-success mt-3"
            onClick={uploadFile}
          >
            Upload
          </button>
          {progress !== 0 && (
            <div className='mt-3'>
              <ProgressBar now={progress} label={`${progress}%`} />
            </div>
          )}
          {successMessage && (
            <div className='mt-3 alert alert-success'>
              {successMessage}
            </div>
          )}
          {files.length > 0 && (
            <div className='mt-3'>
              {files.map((downloadURL, index) => (
                <div key={index} className="border p-3 mb-3">
                  <p>Download URL {index + 1}: <a href={downloadURL} target="_blank" rel="noopener noreferrer">{downloadURL}</a></p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-info mr-2" onClick={() => viewPDF(downloadURL)}>View</button>
                    {editingName === downloadURL ? (
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          value={newName}
                          onChange={handleNameChange}
                          className="form-control mr-2"
                          placeholder="Enter new name"
                        />
                        <button className="btn btn-success" onClick={saveNameChange}>Save</button>
                      </div>
                    ) : (
                      <button className="btn btn-info mr-2" onClick={() => editPDFName(downloadURL)}>
                        {editingName === downloadURL ? 'Cancel' : 'Edit'}
                      </button>
                    )}
                    <button className="btn btn-info" onClick={() => deleteFile(downloadURL)}>Delete</button>
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

export default UploadBook;
