import timeImg from "../../components/img/Icons/time.png";
import "./ContactCard.scss";

export const ContactCard = ({img, alt, title, listLocation, listContacts, time}) => {
  return (
    <div className="contacts-card-box">
      <img className="contacts-card-img" src={img} alt={alt}/>
      <div className="contacts-card-title">{title}</div>
      <div className="contacts-card-list-box">
        <ul className="contacts-card-list-location">
          {listLocation.map((item) => (
            <li key={`location-${item}`}>{item}</li>
          ))}
        </ul>
        <ul className="contacts-card-list-contacts">
          {listContacts.map((item) => (
            <li key={`contact-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="contacts-card-time-box">
        <img className="contacts-card-time-img" src={timeImg} alt="time" />
        {time}
      </div>
    </div>
  );
};