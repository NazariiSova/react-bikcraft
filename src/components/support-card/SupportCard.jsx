import { Link } from "react-router-dom";
import "./support-card.scss";
export const SupportCard = ({ isGold, title, price, list }) => {
    let type = isGold ? 'gold' : 'silver';
  return (
    <div className={`support-${type}-container`}>
       <div className={`support-${type}-left`}>
       <div className={`support-${type}-title`}>{title}</div>
        <div className={`support-${type}-list`}>
          <ul className={`support-${type}-ul`}>

            {list.map((item)=>(
                <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Link className={`support-${type}-button`} to="/Seguros">
          INSCREVA-SE
        </Link>
      </div>
      <div className={`support-${type}-left`}>
        <div className={`support-${type}-prise`}>{price}</div>
        <Link className="support-termos" to="/termos">
          mensal
        </Link>
      </div>
    </div>
    
  );
};
