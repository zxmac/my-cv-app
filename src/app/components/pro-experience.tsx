import React from "react";
import { CvExperience } from "../models/cv.model"

interface ProExperienceProps {
    data: CvExperience[];
}

export default function ProExperience(props: ProExperienceProps) {
    const { data } = props;
    return (
        <div className="section">
            <div className="section-title">Professional Experience</div>            
            { data.map((exp, index) => 
                <React.Fragment key={index}>
                    <div className="job-title">{exp.position}</div>
                    <div className="company-info">{exp.company.value} | {exp.company.description} | {exp.timeperiod}</div>
                    <div className="job-description">
                        <ul>
                            { exp.descriptions.map((desc, idx) => <li key={idx}>{desc}</li>) }
                        </ul>
                    </div>
                </React.Fragment>)
            }
        </div>
    )
}