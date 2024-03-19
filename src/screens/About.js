import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="text-center mb-4">About Book App</h1>
              <p>
                This is the Home screen of the My Book App. You can showcase some
                introductory content or features of your app here.
              </p>
              <h2 className="mt-5 mb-3">Related to E-books:</h2>
              <ul className="list-group">
                <li className="list-group-item">E-books provide instant access to a vast library of titles.</li>
                <li className="list-group-item">They are environmentally friendly, as they save paper.</li>
                <li className="list-group-item">E-books can be read on various devices, such as tablets, phones, and e-readers.</li>
                <li className="list-group-item">Many e-book platforms offer personalized recommendations based on reading habits.</li>
                <li className="list-group-item">Some e-books include multimedia elements, enhancing the reading experience.</li>
                <li className="list-group-item">Readers can adjust font size and style to suit their preferences.</li>
                <li className="list-group-item">E-books often cost less than physical copies.</li>
                <li className="list-group-item">Users can easily highlight passages and make annotations in e-books.</li>
                <li className="list-group-item">Downloading e-books is convenient and saves time compared to visiting a bookstore.</li>
                <li className="list-group-item">E-books can be accessed offline, making them ideal for travel.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
