import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../Onboarding.css";
import logo from "../../../assets/AuthImageNew.png";
import selectedImage from "../../../assets/selected.png";
import notselectedImage from "../../../assets/notselected.png";
import Modal from "../../Component/Modal/Modal";
import { useNavigate } from "react-router-dom";

const Subjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState(null);
  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNextStep = () => {
    navigate("/cbt-mode");
  };

  const [selectedSubjects, setSelectedSubjects] = useState([
    "Maths",
    "English",
  ]);
  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    setSubmitEnabled(selectedSubjects.length === 4);
  }, [selectedSubjects]);

  const handleSubjectSelect = (subject: any) => {
    if (subject === "Maths" || subject === "English") return;

    const isSubjectSelected = selectedSubjects.includes(subject);

    if (isSubjectSelected) {
      setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
    } else {
      if (selectedSubjects.length < 4) {
        setSelectedSubjects([...selectedSubjects, subject]);
      }
    }
  };

  const SubjectItem = ({ subject }: any) => {
    const isSelected = selectedSubjects.includes(subject);
    const backgroundImage = isSelected ? selectedImage : notselectedImage;
    const isLocked = subject === "Maths" || subject === "English";
    const cursorStyle = isLocked ? "not-allowed" : "pointer";

    return (
      <div
        className="subject-item"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          padding: "24.4px",
          marginBottom: "12px",
          cursor: cursorStyle,
          width: "94%",
          marginRight: "-38px",
          textAlign: "left",
          gap: "-12px",
          color: "white",
        }}
        onClick={() => handleSubjectSelect(subject)}
      >
        {subject}
      </div>
    );
  };

  const gradientStylebtnBlack = {
    justifyContent: "space-between",
    background: "#000",
    color: "white",
    fontSize: "14px",
    padding: "16px 20px",
    border: "2px solid black",
    borderRadius: "544px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: "-35px ",
    marginLeft: "12px",
    height: "45px",
    zIndex: -1,
  };

  return (
    <div className="sign-up-container">
      <div className="image-container">
        <img className="Image-Image" src={logo} alt="Image" />
      </div>
      <div className="form-container">
        <div className="div-forms">
          <h2 style={{ fontSize: 30, marginBottom: 14, marginTop: 120 }}>
            Select Preferred Subjects
          </h2>
          <p
            style={{
              backgroundImage: "linear-gradient(to right, #6610F2, #F21098)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginTop: -16,
              marginBottom: 64,
              fontSize: 14,
            }}
          >
            Select subjects to begin CBT
          </p>
        </div>
        <form className="div-forms" style={{ marginBottom: "200px" }}>
          <div
            className="subject-container"
            style={{
              display: "flex",
              flexDirection: "column",
              //flexWrap: "wrap",
              justifyContent: "space-between", // Ensure equal spacing between items
            }}
          >
            {[
              "Maths",
              "English",
              "Physics",
              "Chemistry",
              "Biology",
              "Geography",
              "History",
              "Economics",
              "Computer",
              "Art",
              "Music",
              "French",
              "Literature",
            ].map((subject) => (
              <SubjectItem key={subject} subject={subject} />
            ))}
          </div>

          <div style={{ marginTop: 48 }}></div>
          <button
            style={{
              background: submitEnabled
                ? "linear-gradient(to right, #6610F2, #F21098)"
                : "#ccc",
              color: "white",
              fontSize: "14px",
              padding: "16px 20px",
              border: "2px solid black",
              borderRadius: "544px",
              cursor: submitEnabled ? "pointer" : "not-allowed",
              width: "100%",
              transition: "background 0.3s",
            }}
            type="button"
            onClick={() => setIsModalOpen(true)}
            disabled={!submitEnabled}
          >
            Get Started <FaArrowRight style={{ marginLeft: "5px" }} />
          </button>
          <button style={gradientStylebtnBlack} type="submit">
            {/* //  Sign Up <FaArrowRight style={iconStyle} /> */}
          </button>
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        ifClose
        formContent={
          <div className="mo-width">
            {" "}
            <h3
              style={{
                fontSize: 24,

                marginBottom: 14,
                marginTop: 24,
              }}
            >
              Select Preferred Options
            </h3>
            <p
              style={{
                backgroundImage: "linear-gradient(to right, #6610F2, #F21098)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginTop: -16,
                marginBottom: 64,
                fontSize: 14,
              }}
            >
              Select options to begin CBT
            </p>
            <h3 style={{ fontSize: 16, color: "#808080", marginTop: 48 }}>
              Select Year
            </h3>
            <div
              className="options-container"
              style={{ display: "flex", gap: 12 }}
            >
              {[2021, 2022, 2023, 2024].map((year) => (
                <div
                  key={year}
                  style={{
                    background:
                      selectedYear === year
                        ? "linear-gradient(90deg, #6610F2, #F21098)"
                        : "#80808025",
                    color: selectedYear === year ? "white" : "black",
                    padding: "16px",
                    borderRadius: "4px",
                    marginBottom: "8px",
                    cursor: "pointer",
                    width: 100,
                    textAlign: "center",
                  }}
                  onClick={() => setSelectedYear(year as any)}
                >
                  {year}
                </div>
              ))}
            </div>
            <h3 style={{ fontSize: 16, color: "#808080", marginTop: 48 }}>
              Select Duration
            </h3>
            <div
              className="options-container"
              style={{ display: "flex", gap: 12 }}
            >
              {["30 mins", "45 mins", "1 hour"].map((duration) => (
                <div
                  key={duration}
                  style={{
                    background:
                      selectedDuration === duration
                        ? "linear-gradient(90deg, #6610F2, #F21098)"
                        : "#80808025",
                    color: selectedDuration === duration ? "white" : "black",
                    padding: "16px",
                    borderRadius: "4px",
                    marginBottom: "8px",
                    cursor: "pointer",
                    width: 100,
                    textAlign: "center",
                  }}
                  onClick={() => setSelectedDuration(duration as any)}
                >
                  {duration}
                </div>
              ))}
            </div>
            <h3 style={{ fontSize: 16, color: "#808080", marginTop: 48 }}>
              Select Number of Questions
            </h3>
            <div
              className="options-container"
              style={{ display: "flex", gap: 12 }}
            >
              {[50, 100, 150, 200].map((questions) => (
                <div
                  key={questions}
                  style={{
                    background:
                      selectedQuestions === questions
                        ? "linear-gradient(90deg, #6610F2, #F21098)"
                        : "#80808025",
                    color: selectedQuestions === questions ? "white" : "black",
                    padding: "16px",
                    borderRadius: "4px",
                    marginBottom: "8px",
                    cursor: "pointer",
                    width: 100,
                    textAlign: "center",
                  }}
                  onClick={() => setSelectedQuestions(questions as any)}
                >
                  {questions}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 48 }}></div>
            <button
              style={{
                background: submitEnabled
                  ? "linear-gradient(to right, #6610F2, #F21098)"
                  : "#ccc",
                color: "white",
                fontSize: "14px",
                padding: "16px 20px",
                border: "2px solid black",
                borderRadius: "544px",
                cursor: submitEnabled ? "pointer" : "not-allowed",
                width: "100%",
                transition: "background 0.3s",
              }}
              type="button"
              onClick={handleNextStep}
              disabled={
                !selectedYear || !selectedDuration || !selectedQuestions
              }
            >
              Get Started <FaArrowRight style={{ marginLeft: "5px" }} />
            </button>
            <button style={gradientStylebtnBlack} type="submit">
              {/* //  Sign Up <FaArrowRight style={iconStyle} /> */}
            </button>
            <div style={{ marginTop: 48 }}></div>
          </div>
        }
      />
    </div>
  );
};

export default Subjects;
