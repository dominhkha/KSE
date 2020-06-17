import React from "react";
import "./font/css.css";
import "./font/fontawesome-free-5.11.2-web/css/fontawesome.min.css";
import "./font/fontawesome-free-5.11.2-web/js/fontawesome";
import "./font/w3.css";

class Page extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="w3-content w3-margin-top" style={{ maxWidth: "70%" }}>
        <div className="w3-container" style={{ width: "70vw"}}>
          <div
            className="w3-container w3-card w3-white w3-margin-bottom"
            style={{ width: "100%", paddingBottom: "50px"}}
          >
            <h2 className="w3-text-black w3-padding-16">Tool Manual</h2>
            <div className="w3-container" style={{ color: "black" }}>
              <h5 className="">
                <b>Generate Test data from C++ source code using weighted CFG and boundary value</b>
              </h5>
              <h6 className="w3-text-gray">
                <i className="">Tran Nguyen Huong, Do Minh Kha, Pham Ngoc Hung</i>
              </h6>
              <p>abstract here</p>
              <hr />
            </div>
            <div className="w3-container" style={{ textAlign: "left" }}>
              <span className="w3-tag w3-blue w3-round">SET UP</span>
              <h5 className="w3-opacity">
                <b>Development Enviroment</b>
              </h5>
              <ul>
                <li>
                  IDE: Eclipse Java EE IDE for Web Developers (Oxygen.3a
                  Release)
                </li>
                <li>Java 8</li>
                <li>Window 10</li>
              </ul>
            </div>
            <div className="w3-container" style={{ textAlign: "left" }}>
              <h5 className="w3-opacity">
                <b>Installation</b>
              </h5>
              <ul>
                <li>import CFT4cpp-core to Eclipse</li>
                <li>
                  Install IDE DEV-Cpp (
                  <a
                    href="https://sourceforge.net/projects/orwelldevcpp/"
                    style={{ color: "blue" }}
                  >
                    download
                  </a>
                  )
                </li>
                <li>
                  SMT-Solver Z3 (
                  <a
                    href="https://z3.codeplex.com/releases"
                    style={{ color: "blue" }}
                  >
                    download
                  </a>
                  )
                </li>
                <li>
                  Mingw compiler. The installation can be done by setting up
                  DEV-Cpp
                </li>
              </ul>
            </div>
            <div className="w3-container" style={{ textAlign: "left" }}>
              <h5 className="w3-opacity">
                <b>Take the experiment</b>
              </h5>
              <p>Clone/Download project(<a href="https://github.com/cft4cpp-hmm/cft4cpp-core" style={{color: "blue"}}>GitHub Link</a>)</p>
              <div>
                <p>
                  1. Input your test function at
                  cft4cpp-core\data-test\tsdv\Sample_for_R1
                </p>
              </div>
              <div>
                <p>
                  2. Run: Go to <em>cft4cpp-core\src\GUI\Frame.java</em> and run
                </p>
              </div>
              <div>
                <p>3.Input: </p>
                <div>
                  <p>The display will show as follow: </p>
                  <img
                    src={require("./images/tool_image.png")}
                    style={{ width: "80%", height: "400px" }}
                  />
                  <ul>
                    <li>
                      3.1 input your{" "}
                      <em>
                        Path to Z3, Path to Mingw32, Path to GCC, Path to g++
                      </em>
                    </li>
                    <li>
                      3.2 Choose one of options:{" "}
                      <b>
                        <i>
                          Generate for C2, Generate for bourady or Generate for
                          C2&boudary
                        </i>
                      </b>
                    </li>
                    <li>
                      3.3 Input{" "}
                      <b>
                        <i>depth</i>
                      </b>{" "}
                      - maxmimum iteration for each loop
                    </li>
                    <li>
                      3.4 Input your function name with following format: remove
                      all arguments name and while space.
                      <br /> For example: change maxx(int x) to maxx(int)
                    </li>
                    <i style={{ color: "red" }}>
                      * Fill out all required field with exact format to avoid
                      unexpected result!
                    </i>
                  </ul>
                  <p>
                    After finishing, open file REPORT.html with your favorite
                    Browser, and view result
                  </p>
                </div>
              </div>
            </div>
            <div className="w3-container" style={{ textAlign: "left" }}>
              <h5 className="w3-opacity">
                <b>Out format</b>
              </h5>
              <p>The output of this demostration is a html file, includes:</p>
              <ul>
                <li>
                  All testpath with weight for each edge and its test data
                </li>
                <li>If there are deadccode in test path, it will be red</li>
                <li>
                  If tested function has loop, the result will show test-data
                  for 2, k iterations. (k is a random number, and is greater
                  then 2)
                </li>
                <li>
                  At the end, the file will show test data generation time for
                  C2 citeria. And loop coverage, test data generation time for
                  loop, if your function has loop
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w3-container w3-indigo" style={{height: "10vh", textAlign: "left", fontSize: "14px", lineHeight: "10px",
                    position: "fix", bottom: 0}}>
          <p>Developer: RD320E3 UET-VNU Team</p>
          <p>Contact to the author with any concern!</p>
        </div>
      </div>
    );
  }
}

export default Page;
