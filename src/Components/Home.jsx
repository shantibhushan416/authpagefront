import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogedIn = localStorage.getItem("accessToken");
    if (!isLogedIn) {
      navigate("/signin");
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    window.location.reload(false);
  };

  return (
    <div>
      <h1>XYZ Web Site</h1>
      <br />
      <button
        style={{ padding: "5px", borderRadius: "5px", fontSize: "large" }}
        onClick={logOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
