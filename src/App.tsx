import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Onboarding/Steps/Login";
import Subjects from "./Pages/Onboarding/Steps/Subjects";
import SubjectToggle from "./Pages/CBT/CBTDemo";
import Scoring from "./Pages/Scoring/Scoring";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={SignUp} />
      <Route path="/subjects" Component={Subjects} />
      <Route path="/cbt-mode" Component={SubjectToggle} />
      <Route path="/scoring" Component={Scoring} />
    </Routes>
  );
};

export default App;
