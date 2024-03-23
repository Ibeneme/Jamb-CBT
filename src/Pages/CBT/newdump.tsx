import React, { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string[];
  isAnswered: boolean;
}

const MathQuestions: Question[] = [
  {
    question: "What is 2 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 4 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 9 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 2 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 4 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 9 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 2 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 4 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 9 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 2 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 4 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 9 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 2 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 4 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
  {
    question: "What is 9 + 2?",
    options: ["a) 3", "b) 4", "c) 5", "d) 6"],
    correctAnswer: ["b) 4"],
    isAnswered: false,
  },
];

const EnglishQuestions: Question[] = [
  {
    question: 'What is the plural of "mouse"?',
    options: ["a) mouses", "b) mice", "c) mices", "d) mose"],
    correctAnswer: ["b) mice"],
    isAnswered: false,
  },
];

const ChemistryQuestions: Question[] = [
  {
    question: "What is the atomic number of Oxygen?",
    options: ["a) 6", "b) 7", "c) 8", "d) 9"],
    correctAnswer: ["c) 8"],
    isAnswered: false,
  },
  // Add more chemistry questions here
];

const BiologyQuestions: Question[] = [
  {
    question: "What is the powerhouse of the cell?",
    options: [
      "a) Nucleus",
      "b) Mitochondria",
      "c) Ribosome",
      "d) Endoplasmic reticulum",
    ],
    correctAnswer: ["b) Mitochondria"],
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
  >([0, 0, 0, 0]); // Initialize array to hold counts for each subject

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

  return (
    <div>
      {Object.keys(Questions).map((subject, index) => (
        <div>
          <button key={subject} onClick={() => handleToggle(index)}>
            {subject}
          </button>
        </div>
      ))}
      {selectedSubjectIndex !== -1 && (
        <>
          <QuestionRenderer
            questions={Questions[Object.keys(Questions)[selectedSubjectIndex]]}
            selectedValues={
              selectedValues[Object.keys(Questions)[selectedSubjectIndex]][
                selectedQuestionIndex
              ]
            }
            handleCheckboxChange={handleCheckboxChange}
            handleQuestionChange={handleQuestionChange}
            selectedQuestionIndex={selectedQuestionIndex}
            goToQuestion={goToQuestion}
            selectedSubjectIndex={selectedSubjectIndex} // Pass selectedSubjectIndex prop
          />
        </>
      )}

      {Object.keys(Questions).map((subject, index) => (
        <div>
          <button key={subject} onClick={() => handleToggle(index)}>
            {subject}
          </button>
          <p>({selectedAnswersPerSubject[index]})</p>
        </div>
      ))}
    </div>
  );
};
// const countAnsweredQuestionsPerSubject = (
//   subjectQuestions: Question[]
// ): number => {
//   return subjectQuestions.filter((question) => question.isAnswered).length;
// };

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
//   handleQuestionChange,
  selectedQuestionIndex,
  goToQuestion,
//   selectedSubjectIndex,
}) => {
  return (
    <div>
      <h2
      //style={{ backgroundColor: isQuestionAnswered ? "purple" : "white" }}
      >
        Question {selectedQuestionIndex + 1}:{" "}
        {questions[selectedQuestionIndex]?.question}
      </h2>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {questions[selectedQuestionIndex]?.options?.map((option, index) => (
          <li key={option}>
            <label>
              <input
                type="radio"
                checked={selectedValues[index] === option}
                onChange={() => handleCheckboxChange(option, index)}
              />{" "}
              {option}
            </label>
          </li>
        ))}
      </ul>
      <div>
        {questions?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToQuestion(index)}
            style={{
              backgroundColor: questions[index].isAnswered ? "purple" : "white",
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

//(selectedQuestionIndex === index ? "green" : "white")
