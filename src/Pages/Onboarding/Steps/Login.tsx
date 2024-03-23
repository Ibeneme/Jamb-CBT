import { useState, useEffect } from "react";
import "../Onboarding.css";
import logo from "../../../assets/AuthImageNew.png";
import TextInput from "../../Component/TextInputs/TextInput";
import PasswordInput from "../../Component/TextInputs/TextInputPaswords";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, including upper and lowercase letters, and numbers."
      );
    } else {
      setPasswordError("");
    }
  }, [email, password]);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/subjects");
    if (!emailError && !passwordError) {
      console.log("Form submitted:", { email, password });
    }
  };
  //   const gradientStyle = {
  //     backgroundImage: "linear-gradient(to right, #6610F2, #F21098)",
  //     WebkitBackgroundClip: "text",
  //     WebkitTextFillColor: "transparent",
  //     marginTop: -16,
  //     marginBottom: 64,
  //     fontSize: 14,
  //   };

  const handleHover = (event: any) => {
    event.target.style.background = "#6610F2";
  };

  const handleMouseOut = (event: any) => {
    event.target.style.background =
      "linear-gradient(to right, #6610F2, #F21098)";
  };

  return (
    <div className="sign-up-container">
      <div className="image-container">
        <img className="Image-Image" src={logo} alt="Image" />
      </div>
      <div
        className="form-containers"
        style={{ padding: 12 }}
      >
        <div className="div-forms">
          <h2 style={{ fontSize: 30, marginBottom: 14 }}>Get Started</h2>
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
            Login to Get Started
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email:"
            value={email}
            onChange={handleEmailChange}
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            error={emailError}
            required
          />

          <PasswordInput
            label="Password:"
            value={password}
            onChange={handlePasswordChange}
            id="password"
            name="password"
            placeholder="Password"
            error={passwordError}
            required
          />

          <button
            style={{
              background: "linear-gradient(to right, #6610F2, #F21098)",
              color: "white",
              fontSize: "14px",
              padding: "16px 20px",
              border: "2px solid black", // Black border of 2px solid
              borderRadius: "544px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              width: "200px", // Width set to 200px
              position: "relative",
              justifyContent: "space-between",
            }}
            className="hoverButton"
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
            type="submit"
          >
            Sign Up{" "}
            <span style={{ backgroundColor: "transparent" }}>
              {" "}
              <FaArrowRight />
            </span>
          </button>
          <button
            style={{
              position: "absolute",
              justifyContent: "space-between",
              background: "#000",
              color: "white",
              fontSize: "14px",
              padding: "16px 20px",
              border: "2px solid black", // Black border of 2px solid
              borderRadius: "544px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              width: "200px",
              marginTop: "-35px ", // Width set to 200px
              marginLeft: "12px",
              height: "45px",
              zIndex: -1,
            }}
            type="submit"
          >
            {/* //  Sign Up <FaArrowRight style={iconStyle} /> */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
