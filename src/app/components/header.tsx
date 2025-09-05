import { CvProfile, GSheet } from "../models/cv.model"

interface HeaderProps {
  data: CvProfile
}

export default function Header(props: HeaderProps) {
  const { data } = props;
  const navLink = (link: string) => {
    window.open(link, '_blank');
  };
  
  return (
    <div className="header">
      <div className="name">{data.name}</div>
      <div className="contact-info">Email: {data.email}</div>
      <div className="contact-info">Phone: {data.number}</div>
      <div className="contact-info">Location: {data.address}</div>
      { data.links && data.links.map((link: GSheet, index: number) => (
        <div key={index} className="contact-info" onClick={() => navLink(link.value)}>{link.value2}: {link.value}</div>))
      }
    </div>
  )
}