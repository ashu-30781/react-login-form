import "./App.css";
import Vector from "./images/Vector.png";
import img2 from "./images/img2.png"
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="main-div">
          <div class="first-section">
            <div class="image">
              <div class="icon">
                <img src="./conqt logo 1 1.png" alt="" />
              </div>
              <div class="text">
              HR Insight: Mastering Interviews with Confidence
              </div>
            </div>
          </div>

          <div class="second-section">
            <div class="image-2">
              <div>
                <div>
                  <div class="text-2">
                    Welcome to <span>HR Panel</span>
                  </div>
                  <p class="text-3">
                  TalentTalks: Where HR Meets Seamless Interviews
                  </p>
                </div>

                <div>
                  <form
                    class="login_form"
                    method="post"
                    name="form"
                    action="home.html"
                    onsubmit="return validate()"
                  >
                    <div class="input-container">
                      <div id="input_container1">
                        <input
                          autocomplete="off"
                          type="email"
                          id="input"
                          name="email"
                          placeholder="customer@gmail.com"
                          required
                        />
                        <img src={Vector} id="input_img" alt="input" />
                      </div>
                      <div id="email_error">
                        Please fill up your Email Or Phone
                      </div>
                      <div id="input_container2">
                        <input
                          type="password"
                          id="input2"
                          name="password"
                          placeholder="............"
                          required
                        />
                        <img src={img2} id="input_img2" alt="input" />
                      </div>
                      <div id="pass_error">Please fill your Password</div>

                      <div>
                        <input
                          class="checkbox"
                          type="checkbox"
                          id=""
                          name="vehicle1"
                          value=""
                        />
                        <label class="checkbox-text">Remember me</label>
                        <a class="forgot-password" href="#">
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button class="button" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <p>
                Don't have an account?{" "}
                <a class="Register" href="#">
                  Register
                </a>
              </p>
              <p class="terms">Term of Service | Privacy Policy </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
