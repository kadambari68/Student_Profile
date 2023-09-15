import React, { useState, useEffect } from "react";
import "./StudentProfilePage.css";
// import "./footer.js";
import "./header.js";

const StudentProfilePage = () => {
  const [showMonkeyAnimation, setShowMonkeyAnimation] = useState(true);

  const [activeTab, setActiveTab] = useState("additional");

  const [student, setStudent] = useState({
    name: "John Doe",
    usn: "USN1234",
    semester: 5,
    branch: "CSE",
    address: "123 Main Street, City",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUHDUT7VmvTk68dx46FUaiQbfJkWyk2aJ5y9apPqEUQ&usqp=CAU&ec=48600112",
    libraryDetails: {
      booksBorrowed: 3,
      booksReturned: 2,
      fineAmount: 50
    },
    counsellorName: "Dr. Smith",
    rollNo: "A123",
    gender: "Male",
    bloodGroup: "AB+"
  });

  useEffect(() => {
    setTimeout(() => {
      setShowMonkeyAnimation(false);
    }, 3000); // Adjust the duration to match the monkey animation duration
  }, []);

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setStudent((prevStudent) => ({
        ...prevStudent,
        profilePicture: reader.result
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      {showMonkeyAnimation && (
        <div
          className={`monkey-animation ${showMonkeyAnimation ? "" : "hidden"}`}
        >
          <img
            src="https://em-content.zobj.net/source/joypixels-animations/368/see-no-evil-monkey_1f648.gif"
            alt="Monkey Animation"
            className="monkey-image"
          />
        </div>
      )}

      <div className={`student-profile ${showMonkeyAnimation ? "hidden" : ""}`}>
        <div className="background"></div>
        <div className="content">
          <div className="top-details">
            <div className="profile-picture animate-circles">
              <div className="card-animation">
                <img src={student.profilePicture} alt="Profile" />
                <label htmlFor="profile-picture-input" className="choose-file">
                  Choose File
                  <input
                    id="profile-picture-input"
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureUpload}
                  />
                </label>
              </div>
            </div>
            <div className="personal-details">
              <h1>{student.name}</h1>
              <p>
                <span>Roll No:</span> &nbsp; {student.rollNo}
              </p>
              <p>
                <span>Semester: </span>
                {student.semester}
              </p>
              <p>
                <span>Branch:</span>&nbsp; &nbsp; {student.branch}
              </p>
            </div>
          </div>
          <div
            className={`library-details dropdown ${
              activeTab === "library" ? "active" : ""
            }`}
          >
            <h3 onClick={() => handleTabChange("library")}>Library Details</h3>
            <div className="dropdown-content">
              <p>Books Borrowed: {student.libraryDetails.booksBorrowed}</p>
              <p>Books Returned: {student.libraryDetails.booksReturned}</p>
              <p>Fine Amount: ${student.libraryDetails.fineAmount}</p>
              <p>No. of Days left for submission: 10 days</p>
            </div>
          </div>
          <div
            className={`additional-details dropdown ${
              activeTab === "additional" ? "active" : ""
            }`}
          >
            <h3 onClick={() => handleTabChange("additional")}>
              Additional Details
            </h3>
            <div className="dropdown-content">
              <p>Gender: {student.gender}</p>
              <p>Blood Group: {student.bloodGroup}</p>
              <p>
                <span>USN:</span> &nbsp;
                {student.usn}
              </p>
              <p>Address: {student.address}</p>
              <p>Counsellor's Name: {student.counsellorName}</p>
            </div>
          </div>
        </div>
        <div className="floating-button">
          <button className="button">Resume</button>
          <ul className="options-list">
            <li>View</li>
            <li>Upload</li>
            <li>Edit</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StudentProfilePage;
