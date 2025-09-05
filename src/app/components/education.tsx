import { CvEducation } from "../models/cv.model"

interface EductionProps {
    data: CvEducation[];
}

export default function Eduction(props: EductionProps) {
    const { data } = props;
    const education = data.map(item => item.list).flat();
    return (
        <div className="section">
            <div className="section-title">Education</div>
            {   education.map((edu, index) => 
                <div key={index} className="education-item">
                    <div className="degree">{edu.value}</div>
                    <div className="school">{edu.value} | {edu.description}</div>
                    <div>Graduated: {edu.value3}</div>
                </div>)
            }
        </div>
    )
}