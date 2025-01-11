import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      about
    );
    // Add your form submission logic here
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setAbout("");
  };

  return (
    <>
      <center>
        <h2>Form in React</h2>
      </center>

      <form action="#" method="get">
        <div class="mb-3">
          <label for="First-Name">First Name*</label>
          <input
            type="first-name"
            class="form-control"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="last-name">Last Name*</label>
          <input
            type="l-name"
            class="form-control"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email">Enter Email*</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="contact">Contact*</label>
          <input
            type="contact"
            class="form-control"
            id="contact"
            placeholder="Enter Mobile Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <label for="gender">Gender*</label>
        <div class="form-check form-check-inline radio-box">
          <input
            class="form-check-input"
            type="radio"
            name="Male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="Female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Female
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="Other"
            id="others"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Other
          </label>
        </div>
        <div class="mb-3">
          <label htmlFor="subject">Your Subject</label>
          <div class="form-check form-check-inline radio-box">
            <input
              class="form-check-input "
              type="checkbox"
              id="english"
              value="engish"
              checked={subjects.english === true}
              onChange={(e) => handleSubjectChange("english")}
            />
            <label class="form-check-label" for="inlineCheckbox1">
              English
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="math"
              value="math"
              checked={subjects.maths === true}
              onChange={(e) => handleSubjectChange("maths")}
            />
            <label class="form-check-label" for="inlineCheckbox2">
              Math
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="physics"
              value="physics"
              checked={subjects.physics === true}
              onChange={(e) => handleSubjectChange("physics")}
            />
            <label class="form-check-label" for="inlineCheckbox2">
              Physics
            </label>
          </div>
        </div>

        <div class="mb-3">
          <label for="formFileSm" class="form-label">
            Upload Resume*
          </label>
          <input
            class="form-control form-control-sm"
            id="file"
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </div>
        <div class="mb-3">
          <label for="First-Name">Enter URL*</label>
          <input
            type="URL"
            class="form-control"
            id="url"
            placeholder="Enter URL"
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <label for="exampleFormControlTextarea1">About</label>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="about"
            rows="7"
            onChange={(e) => setAbout(e.target.value)}
            required
          ></textarea>
        </div>
        <center>
          <div class="inline">
            <button
              type="reset"
              class="btn btn-success btns"
              value="Reset"
              onClick={() => handleReset()}
            >
              Reset
            </button>
            <button
              type="submit"
              class="btn btn-success btns"
              value="Submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </center>
      </form>
    </>
  );
}

export default App;
