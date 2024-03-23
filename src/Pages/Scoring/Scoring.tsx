import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/AuthImageNew.png";
import ConfettiExplosion from "react-confetti-explosion";
import CTAButton from "../../components/buttons/CTAButton";

const Scoring = () => {
  const navigate = useNavigate();

  const [isExploding, setIsExploding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setIsExploding(true); // Trigger the explosion
      setLoading(false);
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 5000);

      // Cleanup function to clear the timeout if component unmounts or loading state changes
      return () => clearTimeout(timeoutId);
    }
  }, [loading]);

  return (
    <div className="sign-up-container">
      <div className="image-container">
        <img className="Image-Image" src={logo} alt="Image" />
      </div>
      <div className="form-containers" style={{ padding: 12 }}>
        <div className="div-forms">
          <div>
            {isExploding && (
              <ConfettiExplosion duration={10000} zIndex={1000000000000000} />
            )}{" "}
          </div>
          <h2 style={{ fontSize: 30, marginBottom: 14 }}>You Scored</h2>
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
            Hello Ibeneme, your score is
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#6610F215",
            padding: "2px 16px",
            marginBottom: 8,
            color: "#6610F2",
            borderRadius: 16,
          }}
        >
          <span>Mathematics</span>
          <p>34/56</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#6610F215",
            padding: "2px 16px",
            marginBottom: 8,
            color: "#6610F2",
            borderRadius: 16,
          }}
        >
          <span>English</span>
          <p>34/56</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#6610F215",
            padding: "2px 16px",
            marginBottom: 8,
            color: "#6610F2",
            borderRadius: 16,
          }}
        >
          <span>Chemistry</span>
          <p>34/56</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#6610F215",
            padding: "2px 16px",
            marginBottom: 8,
            color: "#6610F2",
            borderRadius: 16,
          }}
        >
          <span>Biology</span>
          <p>34/56</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#6610F2",
            padding: "2px 16px",
            marginBottom: 8,
            color: "#fff",
            borderRadius: 16,
          }}
        >
          <span>Total</span>
          <p>400</p>
        </div>
        <br /> <br /> <br />
        <CTAButton text="Try Again" onPress={() => navigate("/subjects")} />
      </div>
    </div>
  );
};

export default Scoring;
