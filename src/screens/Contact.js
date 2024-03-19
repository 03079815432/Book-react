import React from 'react';
import logo from './logo.jpg'; // Importing logo.jpg

function Contact() {
  // Dummy contacts data
  const contacts = [
    { name: 'Sayed Shah Mohsin', email: 'mohsinsayed@gmail.com', phone: '03079815432', profilePic: logo },
    { name: 'Mohsin Sayed', email: 'Sayedshah@gmail.com', phone: '93424868406', profilePic: logo },
    // Add more contacts as needed
  ];

  return (
    <div>
      <h1>Contact Book App</h1>
      <p>
        This is the Home screen of the My Book App. You can showcase some
        introductory content or features of your app here.
      </p>

      <h2>Contacts:</h2>
      <table className="table table-striped" style={{backgroundColor: 'lightblue'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Profile Picture</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td><img src={contact.profilePic} alt={`Profile of ${contact.name}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
