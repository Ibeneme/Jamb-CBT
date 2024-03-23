import React, { useEffect, useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "../CBT/CBTDemo.css";
import { FaCalculator } from "react-icons/fa";
import TwoButtonComponent from "../../components/buttons/MainButton";
import Calculator from "../../components/calculator/Calculator";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string[];
  isAnswered: boolean;
}

const MathQuestions: Question[] = [
  {
    question: `When you arrive at your exam centre, you’ll be accredited and directed to the computer you’ll be using. The system will already be turned on, so all you need to do is enter your JAMB Registration Number. The next page will display your details, including your name, photo, and the subjects you’ll write about. Make sure everything is correct before proceeding. Don’t hesitate to ask the invigilator if you notice any discrepancies or need assistance.`,
    options: ["A. 3", "B. 4", "C. 5", "D. 6"],
    correctAnswer: ["B. 4"],
    isAnswered: false,
  },
  {
    question:
      "A rectangular garden measures 15 meters in length and 10 meters in width, serving as a tranquil retreat for its owner. However, the owner decides to undertake a landscaping project to expand the garden's length by 50% while simultaneously reducing its width by 20% to create space for a new feature. Calculate the new area of the garden after these modifications, considering the aesthetic and functional aspects of the transformation.",
    options: ["A. 3", "B. 4", "C. 5", "D. 6"],
    correctAnswer: ["B. 4"],
    isAnswered: false,
  },
  {
    question:
      "The production of a factory starts at 500 units per day. Over the course of 12 weeks, the production rate increases by 20% each week due to the implementation of new efficiency measures and the hiring of additional staff. Assuming no other factors affect production, calculate the total number of units produced by the end of the 12th week, taking into account the cumulative effect of the weekly production increases.",
    options: ["A. 3", "B. 4", "C. 5", "D. 6"],
    correctAnswer: ["B. 4"],
    isAnswered: false,
  },
  {
    question:
      "Visualize a cylindrical tank with a radius of 5 meters and a height of 10 meters, serving as a vital component in a water supply system for a rural community. The tank is currently filled with water up to 80% of its capacity, providing a reserve for times of scarcity. Determine the volume of water, in cubic meters, contained within the tank, and analyze its critical role in ensuring a sustainable water source for the community's needs.",
    options: ["A. 3", "B. 4", "C. 5", "D. 6"],
    correctAnswer: ["B. 4"],
    isAnswered: false,
  },
  {
    question:
      "A rectangular garden measures 15 meters in length and 10 meters in width, serving as a tranquil retreat for its owner. However, the owner decides to undertake a landscaping project to expand the garden's length by 50% while simultaneously reducing its width by 20% to create space for a new feature. Calculate the new area of the garden after these modifications, considering the aesthetic and functional aspects of the transformation.",
    options: ["A. 3", "B. 4", "C. 5", "D. 6"],
    correctAnswer: ["B. 4"],
    isAnswered: false,
  },
  {
    question:
      "ane purchases a new car for $25,000. Each year, the car's value depreciates by 10% due to wear and tear, technological advancements, and market fluctuations. After 5 years of ownership, if Jane decides to sell the car, estimate its approximate value based on the cumulative depreciation over the years",
    options: ["A. 3", "B. 4", "C. 5", "D. 6"],
    correctAnswer: ["B. 4"],
    isAnswered: false,
  },
  {
    question:
      "A manufacturing company decides to expand its production capacity by investing in new machinery. The initial cost of the machinery is $100,000, and it is expected to increase production by 10% each month for the first six months. However, due to maintenance requirements and increased energy costs, the production growth rate decreases by 2% every month thereafter. Assuming no other factors influence production, calculate the total number of units produced and the total production cost at the end of 12 months, considering a selling price of $50 per unit.",
    options: ["A. 3", "B. 4", "C. 5", "D. 6"],
    correctAnswer: ["B. 4"],
    isAnswered: false,
  },
];

const EnglishQuestions: Question[] = [
  {
    question: `Analyze the character development of Lady Macbeth throughout Shakespeare's play "Macbeth." Explore how her ambition, guilt, and eventual downfall contribute to the themes of power and corruption in the play. Provide examples from the text to support your analysis and discuss the impact of Lady Macbeth's actions on other characters.`,
    options: [
      "A. Lady Macbeth's ambition leads to her downfall, demonstrating the consequences of unchecked ambition.",
      "B. Lady Macbeth's guilt drives her to madness, highlighting the psychological effects of immoral actions.",
      "C. Lady Macbeth's character remains static throughout the play, serving as a mere plot device for Macbeth's ambition.",
      "D. Lady Macbeth's downfall is primarily caused by external forces, rather than her own actions and decisions",
    ],
    correctAnswer: [
      "B. Lady Macbeth's guilt drives her to madness, highlighting the psychological effects of immoral actions.",
    ],
    isAnswered: false,
  },
  {
    question: `Analyze the character development of Lady Macbeth throughout Shakespeare's play "Macbeth." Explore how her ambition, guilt, and eventual downfall contribute to the themes of power and corruption in the play. Provide examples from the text to support your analysis and discuss the impact of Lady Macbeth's actions on other characters.`,
    options: [
      "A. Lady Macbeth's ambition leads to her downfall, demonstrating the consequences of unchecked ambition.",
      "B. Lady Macbeth's guilt drives her to madness, highlighting the psychological effects of immoral actions.",
      "C. Lady Macbeth's character remains static throughout the play, serving as a mere plot device for Macbeth's ambition.",
      "D. Lady Macbeth's downfall is primarily caused by external forces, rather than her own actions and decisions",
    ],
    correctAnswer: [
      "B. Lady Macbeth's guilt drives her to madness, highlighting the psychological effects of immoral actions.",
    ],
    isAnswered: false,
  },

  {
    question: `Compare and contrast the use of symbolism in F. Scott Fitzgerald's "The Great Gatsby" and Harper Lee's "To Kill a Mockingbird." Discuss how each author employs symbols such as the green light, the mockingbird, and the American flag to convey deeper themes and messages. Analyze the significance of these symbols within the context of the respective novels.`,
    options: [
      `A. Both novels use symbolism to explore themes of hope and aspiration, as represented by the green light in "The Great Gatsby" and the mockingbird in "To Kill a Mockingbird."`,
      `B. The green light in "The Great Gatsby" symbolizes Gatsby's unattainable dreams, while the mockingbird in "To Kill a Mockingbird" represents innocence and vulnerability.`,
      "C. The American flag symbolizes patriotism and national identity in both novels, reflecting the cultural values of the time period.",
      ` D. The use of symbolism in "The Great Gatsby" and "To Kill a Mockingbird" is superficial and does not significantly enhance the thematic depth of the novels`,
    ],
    correctAnswer: [
      ` D. The use of symbolism in "The Great Gatsby" and "To Kill a Mockingbird" is superficial and does not significantly enhance the thematic depth of the novels`,
    ],
    isAnswered: false,
  },
];

const ChemistryQuestions: Question[] = [
  {
    question: "What is the atomic number of Oxygen?",
    options: ["A. 6", "B. 7", "C. 8", "D. 9"],
    correctAnswer: ["C. 8"],
    isAnswered: false,
  },
  // Add more chemistry questions here
];

const BiologyQuestions: Question[] = [
  {
    question: "What is the powerhouse of the cell?",
    options: [
      "A. Nucleus",
      "B. Mitochondria",
      "C. Ribosome",
      "D. Endoplasmic reticulum",
    ],
    correctAnswer: ["B. Mitochondria"],
    isAnswered: false,
  },
  // Add more biology questions here
];

const Questions: { [key: string | number]: Question[] } = {
  mathematics: MathQuestions,
  english: EnglishQuestions,
  chemistry: ChemistryQuestions,
  biology: BiologyQuestions,
};

const SubjectToggle: React.FC = () => {
  const [selectedAnswerIndexes, setSelectedAnswerIndexes] = useState<number[]>(
    []
  );

  const [selectedAnswersPerSubjectMaths, setSelectedAnswersPerSubjectMaths] =
    useState<number>(0);

  const [selectedAnswersPerSubjectEng, setSelectedAnswersPerSubjectEng] =
    useState<number>(0);
  const [selectedAnswersPerSubjectChem, setSelectedAnswersPerSubjectChem] =
    useState<number>(0);
  const [selectedAnswersPerSubjectBio, setSelectedAnswersPerSubjectBio] =
    useState<number>(0);
  const [selectedAnswersPerSubject, setSelectedAnswersPerSubject] = useState<
    number[]
  >([0, 0, 0, 0]);
  <p style={{ display: "none" }}>{selectedAnswersPerSubject}</p>;
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState<number>(0);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0); // Index of the current question
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: { [key: number]: string }[];
  }>({
    mathematics: Array(MathQuestions.length).fill({}),
    english: Array(EnglishQuestions.length).fill({}),
    chemistry: Array(ChemistryQuestions.length).fill({}),
    biology: Array(BiologyQuestions.length).fill({}),
  });

  const handleToggle = (index: number) => {
    setSelectedSubjectIndex(index);
    console.log(selectedSubjectIndex);
    console.log(selectedValues?.biology);
    //console.log(selectedAnswerIndexes, "selectedAnswerIndexes");
    setSelectedQuestionIndex(0); // Reset question index to 0
  };

  const handleCheckboxChange = (value: string, questionIndex: number) => {
    const subjectKey = Object.keys(Questions)[selectedSubjectIndex];
    const updatedValues = { ...selectedValues };
    console.log(selectedSubjectIndex, "selectedSubjectIndex");
    const currentSelectedValues =
      updatedValues[subjectKey][selectedQuestionIndex];

    // If the value is already selected, deselect it
    if (
      currentSelectedValues &&
      currentSelectedValues[questionIndex] === value
    ) {
      delete updatedValues[subjectKey][selectedQuestionIndex][questionIndex];
    } else {
      // Clear previously selected values for this question
      updatedValues[subjectKey][selectedQuestionIndex] = {};

      updatedValues[subjectKey][selectedQuestionIndex][questionIndex] = value;
    }

    setSelectedValues(updatedValues);
    setSelectedAnswerIndexes((prevIndexes) => [...prevIndexes, questionIndex]);
    console.log(selectedAnswerIndexes, "selectedAnswerIndexes");
    // Questions[subjectKey][selectedQuestionIndex].isAnswered = true;

    if (subjectKey === "mathematics") {
      setSelectedAnswersPerSubjectMaths(selectedAnswersPerSubjectMaths + 1);
    } else if (subjectKey === "english") {
      setSelectedAnswersPerSubjectEng(selectedAnswersPerSubjectEng + 1);
    } else if (subjectKey === "chemistry") {
      setSelectedAnswersPerSubjectChem(selectedAnswersPerSubjectChem + 1);
    } else if (subjectKey === "biology") {
      setSelectedAnswersPerSubjectBio(selectedAnswersPerSubjectBio + 1);
    }

    // Update the isAnswered property of the question if not already answered
    if (Questions[subjectKey][selectedQuestionIndex].isAnswered === false) {
      console.log("Question is not answered yet");
      Questions[subjectKey][selectedQuestionIndex].isAnswered = true;

      // Update the count for the selected subject
      let subjectIndex = Object.keys(Questions).indexOf(subjectKey);
      console.log(subjectIndex, "Subject Index");
      setSelectedAnswersPerSubject((prevCounts) => {
        const updatedCounts = [...prevCounts];
        updatedCounts[subjectIndex] += 1;
        return updatedCounts;
      });
    } else {
      console.log("Question is already answered");
    }

    console.log(subjectKey, "subj");
    setSelectedAnswerIndexes((prevIndexes) => [...prevIndexes, questionIndex]);
  };

  const handleQuestionChange = (index: number) => {
    setSelectedQuestionIndex(index);
  };

  const goToQuestion = (index: number) => {
    setSelectedQuestionIndex(index);
  };

  const [minutes, setMinutes] = useState(120);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          // Timer has reached 0 minutes and 0 seconds, you may add additional logic here if needed
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <div style={{ margin: 12 }}>
      <nav className="timer-nav">
        <span className="span-icon-calculator">
          <FaCalculator className="icon-calculator" />
        </span>
        <strong style={{ color: "#fff", fontSize: 24 }}>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </strong>
        <span>
          <TwoButtonComponent
            onPress={() => console.log("submit")}
            text="Submit"
          />
        </span>
      </nav>

      <div className="div-question-and-calculator">
        <Calculator />
        <div>
          <div className="subject-toggling">
            {Object.keys(Questions).map((subject, index) => (
              <button
                key={subject}
                onClick={() => handleToggle(index)}
                className="subject-toggling-buttons"
                style={{
                  backgroundColor:
                    selectedSubjectIndex === index ? "#6610F2" : "transparent",
                  color: selectedSubjectIndex === index ? "white" : "black",
                }}
              >
                {subject.charAt(0).toUpperCase() + subject.slice(1)}{" "}
              </button>
            ))}
          </div>

          {selectedSubjectIndex !== -1 && (
            <>
              <QuestionRenderer
                questions={
                  Questions[Object.keys(Questions)[selectedSubjectIndex]]
                }
                selectedValues={
                  selectedValues[Object.keys(Questions)[selectedSubjectIndex]][
                    selectedQuestionIndex
                  ]
                }
                handleCheckboxChange={handleCheckboxChange}
                handleQuestionChange={handleQuestionChange}
                selectedQuestionIndex={selectedQuestionIndex}
                goToQuestion={goToQuestion}
                selectedSubjectIndex={selectedSubjectIndex}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const QuestionRenderer: React.FC<{
  questions: Question[];
  selectedValues: { [key: number]: string };
  handleCheckboxChange: (value: string, questionIndex: number) => void;
  handleQuestionChange: (index: number) => void;
  selectedQuestionIndex: number;
  goToQuestion: (index: number) => void;
  selectedSubjectIndex: number;
}> = ({
  questions,
  selectedValues,
  handleCheckboxChange,
  selectedQuestionIndex,
  goToQuestion,
}) => {
  return (
    <div className="question-main">
      <div>
        <h2>
          <span style={{ color: "#6610F2", fontSize: 18 }}>
            Question {selectedQuestionIndex + 1}:{" "}
          </span>{" "}
        </h2>
        <br />
        <p className="subject-toggling-subject">
          {questions[selectedQuestionIndex]?.question}
        </p>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {questions[selectedQuestionIndex]?.options?.map((option, index) => (
            <li key={option}>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  checked={selectedValues[index] === option}
                  onChange={() => handleCheckboxChange(option, index)}
                  style={{
                    marginRight: 8,
                    backgroundColor:
                      selectedValues[index] === option ? "#6610F2" : "#808080",
                    display: "none",
                  }}
                />
                <span
                  style={{
                    color:
                      selectedValues[index] === option ? "#fff" : "#808080",
                    backgroundColor:
                      selectedValues[index] === option
                        ? "#6610F2"
                        : "transparent",
                  }}
                  className="subject-toggling-span"
                >
                  <span> {option}</span>

                  <BsFillPatchCheckFill
                    className="icon-check"
                    color={
                      selectedValues[index] === option ? "#fff" : "transparent"
                    }
                    size={20}
                  />
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: 24 }}>
        {questions?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToQuestion(index)}
            style={{
              backgroundColor: (() => {
                let backgroundColor;
                switch (true) {
                  case questions[index].isAnswered &&
                    selectedQuestionIndex === index:
                    backgroundColor = "#6610F2";
                    break;
                  case selectedQuestionIndex === index:
                    backgroundColor = "#6610F2";
                    break;
                  case questions[index].isAnswered:
                    backgroundColor = "#6610F225";
                    break;
                  default:
                    backgroundColor = "#80808030";
                    break;
                }
                return backgroundColor;
              })(),

              color: (() => {
                let color;
                switch (true) {
                  case selectedQuestionIndex === index:
                    color = "#fff";
                    break;
                  case questions[index].isAnswered:
                    color = "#6610F2";
                    break;
                  default:
                    color = "#121212";
                    break;
                }
                return color;
              })(),

              padding: "12px 32px",
              gap: 4,
              fontFamily: "var(--fontFamily)",
              border: "none",
              borderRadius: 24,
              marginRight: 4,
              marginBottom: 8,
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectToggle;
