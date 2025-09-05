import React from "react";
import { CvTechStack } from "../models/cv.model"

interface TechSkillsProps {
    data: CvTechStack
}

export default function TechSkills(props: TechSkillsProps) {
    const { data } = props;
    const skills = data.techs.map(tech => {
        return { ...tech, list: tech.value2.split(',').map(item => item.trim()) };
    });
    return (
        <div className="section">
            <div className="section-title">Technical Skills</div>
            <div className="skills-list">
                { skills.map((skill, index) => 
                    <React.Fragment key={index}>
                        <div className="div-separator" key={`ds-${index}`}>{skill.value}</div>
                        { skill.list.map((item, idx) => 
                            <div key={`${index}-${idx}`} className="skill-item">{item}</div>)
                        }
                    </React.Fragment>)
                }
            </div>
        </div>
    )
}