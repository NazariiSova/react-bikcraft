import React from "react";
import "./termosPage.scss";
import Footer from "../../components/footer/Footer";
import data from "../../components/termosList/termosList"

const TermosPage = () => {
  return (
    <div className="termos-container">
      <div className="termos-header">
        <div className="termos-header-title-small">TERMOS DE USO</div>
        <div className="termos-header-title">termos e condições</div>
      </div>
      <div className="termos-list-container">
           <div className="termos-list-box">
        {data.map((item) => (
          <li className="termos-list-title-box" key={item.title}>
            <h3 className="termos-list-title">{item.title}</h3>
            <ul className="termos-list-description-box">
              {item.list.map((listItem, index) => (
                <li className="termos-list-description" key={index}>{listItem}</li>
              ))}
            </ul>
          </li>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermosPage;
