import React from "react";
import "./TechSkill.scss";
import {techStack} from "../../portfolio";

export default function TechSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {techStack.techSkills.map((skills, i) => {
            const { Icon } = skills;
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <Icon />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
