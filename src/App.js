import React from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import Vector from "./images/Vector.png";
import img2 from "./images/img2.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-div">
          <div className="first-section">
            <div className="image">
              <div className="icon">
                <img src="./conqt logo 1 1.png" alt="" />
              </div>
              <div className="text">
                HR Insight: Mastering Interviews with Confidence
              </div>
            </div>
          </div>

          <div className="second-section">
            <div className="image-2">
              <div>
                <div>
                  <div className="text-2">
                    Welcome to <span>HR Panel</span>
                  </div>
                  <p className="text-3">
                    TalentTalks: Where HR Meets Seamless Interviews
                  </p>
                </div>

                <div>
                  <LoginForm />
                </div>
              </div>

              {/* <p>
                Don't have an account?{" "}
                <a className="Register" href="#">
                  Register
                </a>
              </p> */}
              <p className="terms">Term of Service | Privacy Policy </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
