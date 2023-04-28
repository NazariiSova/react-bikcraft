import React, { useState } from "react";
import "./DropDownFAQ.scss";

import dropdown from "../img/Icons/dropdown.png";

export const DropDownFAQ = ({question, i }) => {
  const [dropdownAnswer, setDropdownAnswer] = useState(false);
  const handlerChangeDropdownAnswer = () => setDropdownAnswer(!dropdownAnswer);
  const bgColor = i % 2 === 0 ? "dropdown-box-transparent" : "dropdown-box-colored";
  return (
    <div
      className={bgColor}
    >
     
        <div className="dropdown-FAQ-content">
          <div
            className="dropdown-FAQ-question"
            onClick={handlerChangeDropdownAnswer}
          >
            {question}
          </div>
          {dropdownAnswer && (
            <div className="dropdown-FAQ-answer">
              Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO
              e American Express. Para pagamentos à vista aceitamos PIX e Boleto
              através do PageSeguro.
            </div>
          )}
        </div>
      

      <img
        className="dropdown-FAQ-img"
        src={dropdown}
        alt="dropdown"
        onClick={handlerChangeDropdownAnswer}
      />
    </div>
  );
};
