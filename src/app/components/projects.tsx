import React from "react";
import { CvExperience } from "../models/cv.model"

interface ProjectsProps {
    data: CvExperience[]
}

export default function Projects(props: ProjectsProps) {
    const { data } = props;
    const projects = data.map(item => item.expApps).flat();
    return (
        <div className="section">
            <div className="section-title">Projects</div>
            
            { projects.map((item, index) => 
                <React.Fragment key={index}>
                    <div className="job-title">{item.expApp.value}</div>
                    <div className="job-description">
                        <ul>
                            { [item.expApp.description].map((desc, idx) => <li key={`${index}-${idx}`}>{desc}</li>) }
                        </ul>
                    </div>
                </React.Fragment>)
            }
        </div>
    )
}