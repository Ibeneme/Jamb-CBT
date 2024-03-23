import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

interface TwoButtonProps {
  onPress: () => void;
  text: string;
}

const TwoButtonComponent: React.FC<TwoButtonProps> = ({ onPress, text }) => {
  const [widthState, setWidth] = useState(false);

  const handleHover = (event: any) => {
    event.target.style.background = "#6610F2";
    event.target.style.color = "#fff";
    event.target.style.width = "120px";
    event.target.style.transistion = "0.4s";
    setWidth(true);
  };

  const handleMouseOut = (event: any) => {
    event.target.style.background = "#Fff";
    event.target.style.color = "#000";
    event.target.style.width = "100px";
    event.target.style.transistion = "0.4s";
    setWidth(false);
  };

  return (
    <div style={{ marginRight: 32, width: 100 }}>
      <button
        style={{
          //background: "linear-gradient(to right, #6610F2, #F21098)",
          color: "white",
          fontSize: "14px",
          padding: "16px 20px",
          border: "2px solid black",
          borderRadius: "544px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          width: "100px",
          position: "relative",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          fontFamily: "var(--fontFamily)",
          zIndex: 2,
          marginTop: -12,
        }}
        className="hoverButton"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
        type="submit"
        onClick={onPress}
      >
        {text}
        <span style={{ backgroundColor: "transparent" }}>
          {" "}
          {/* <FaArrowRight /> */}
        </span>
      </button>
      <button
        style={{
          position: "absolute",
          justifyContent: "space-between",
          background: widthState ? "#fff" : "#000",
          color: "white",
          fontSize: "14px",
          padding: "16px 20px",
          border: "2px solid black",
          borderRadius: "544px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          width: widthState ? "120px" : "100px",
          marginTop: "-33px",
          marginLeft: "12px",
          height: "45px",
          zIndex: 1,
        }}
        type="submit"
        onClick={onPress}
      >
        {/* //  Sign Up <FaArrowRight style={iconStyle} /> */}
      </button>
    </div>
  );
};

export default TwoButtonComponent;
