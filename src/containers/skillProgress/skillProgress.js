import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import TechSkill from "../../components/techSkills/TechSkill"
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            <p>Throughout my IT journey, I was fortunate enough to came accross many technical skills and got opportunity to work on them. As a whole working on DevOps tools specially Kubernetes is my favorite.
              <br />
              <br />
              Below are some mentioned tools and tech in which I have some hands-on experience:
            </p>
            <TechSkill />
          </div>
          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Skills"
                src=""
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
