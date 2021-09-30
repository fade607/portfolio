import React from "react";
import "../css/skills.css";
import videoSkills from "../video/skills.mp4";
function Skills() {
  return (
    <div className="skills-box" id="skills">
      <video
        src={videoSkills}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "150vh",
          objectFit: "cover",
          zIndex: "-1",
        }}
      ></video>
      <div className="skills-title"> My Skills</div>

      <div className="skills">
        <div className="box" data-aos="flip-left">
          <div className="shadow"></div>
          <img src="../images/js.png" alt="js" />

          <div className="percent">
            <svg className="svg">
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <div className="number">
              <h2>
                75
                <span>%</span>
              </h2>
            </div>
            <div className="text">
              <h2> JavaScript</h2>
            </div>
          </div>
        </div>
        <div className="box html" data-aos="flip-left">
          <div className="shadow"></div>
          <img src="../images/html.png" alt="python" />

          <div className="percent">
            <svg className="svg">
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <div className="number">
              <h2>
                80
                <span>%</span>
              </h2>
            </div>
            <div className="text">
              <h2>Html</h2>
            </div>
          </div>
        </div>
        <div className="box python" data-aos="flip-right">
          <div className="shadow"></div>
          <img src="../images/python.jfif" alt="python" />
          <div className="percent">
            <svg className="svg">
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <div className="number">
              <h2>
                60
                <span>%</span>
              </h2>
            </div>
            <div className="text">
              <h2>Python</h2>
            </div>
          </div>
        </div>
        <div className="box react" data-aos="flip-right">
          <div className="shadow"></div>
          <img src="../images/react.png" alt="js" />

          <div className="percent">
            <svg className="svg">
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <div className="number">
              <h2>
                75
                <span>%</span>
              </h2>
            </div>
            <div className="text">
              <h2> React</h2>
            </div>
          </div>
        </div>
        <div className="box vue" data-aos="flip-left">
          <div className="shadow"></div>
          <img src="../images/vue.png" alt="vue" />

          <div className="percent">
            <svg className="svg">
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <div className="number">
              <h2>
                65
                <span>%</span>
              </h2>
            </div>
            <div className="text">
              <h2> Vue</h2>
            </div>
          </div>
        </div>
        <div className="box css" data-aos="flip-right">
          <div className="shadow"></div>
          <img src="../images/css.png" alt="css" />

          <div className="percent">
            <svg className="svg">
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <div className="number">
              <h2>
                76
                <span>%</span>
              </h2>
            </div>
            <div className="text">
              <h2> CSS</h2>
            </div>
          </div>
        </div>
        <div className="box bootstrap" data-aos="flip-left">
          <div className="shadow"></div>
          <img src="../images/bootstrap.jfif" alt="bootstrap" />

          <div className="percent">
            <svg className="svg">
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <div className="number">
              <h2>
                65
                <span>%</span>
              </h2>
            </div>
            <div className="text">
              <h2> Bootstrap</h2>
            </div>
          </div>
        </div>
        <div className="box django" data-aos="flip-right">
          <div className="shadow"></div>
          <img src="../images/django.png" alt="django" />

          <div className="percent">
            <svg className="svg">
              <circle cx="50" cy="50" r="50"></circle>
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <div className="number">
              <h2>
                70
                <span>%</span>
              </h2>
            </div>
            <div className="text">
              <h2> Django</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
