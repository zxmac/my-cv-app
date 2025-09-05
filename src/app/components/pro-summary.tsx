import { CvSummary } from "../models/cv.model";

interface IProSummary {
    data: CvSummary
}

export default function ProSummary(props: IProSummary) {
    const { data } = props;
    return (
        <div className="section">
            <div className="section-title">Professional Summary</div>
            <p>{data.title}</p>
        </div>
    )
}