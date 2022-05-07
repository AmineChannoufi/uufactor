import React from "react";
import Data from "./Data";
import Servitem from "./Servitem";
import "./Services.css"
import img2 from "./../assets/img2.jpg"
const Services = () => {
    const item=Data.serv.map((itembox)=>{
        return(
            <div className="col-md-6">
               <Servitem tittle={itembox.tittle}
               text={itembox.text} icons={itembox.icons}
               />
            </div>
        )
    })
  return (
    
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">

            <h2>Our services</h2>
            <p>
              Le Factoring (affacturage) est défini comme " le transfert des
              créances commerciales de leur titulaire (l’adhérent) à un Factor
              qui se charge d’en opérer le financement, d’en garantir la bonne
              fin, même en cas de défaillance momentanée ou permanente du
              débiteur, de régler par anticipation, tout ou une partie du
              montant des créances transférées ". Il n'existe pas de loi
              spécifique qui s'applique au factoring mais plutôt au principe de
              SUBROGATION qui lui est sous-jacent.
            </p>
          </div>
        </div>
        <div className="row">{item}</div>
        <div className="row last">
          <div className="col-md-6">
            <h3>Pourquoi choisir UNIFACTOR ?</h3>
            <ul >
              <li>Pallier à une gêne de trésorerie ou à une défaillance de financements bancaires.</li>
              <li>Développer son chiffre d’affaires et financer sa croissance.</li>
              <li>Se lancer sur de nouveaux marchés locaux ou internationaux.</li>
              <li>Le financement total ou partiel de vos factures sans en attendre le paiement à l’échéance.</li>
              <li> La gestion du compte clients : tenue de comptes, suivi, relance, recouvrement et engagement éventuel d’actions de contentieux.</li>
              <li> La gestion du compte clients : tenue de comptes, suivi, relance, recouvrement et engagement éventuel d’actions de contentieux.</li>
            </ul>
            <button>Learn More </button>
          </div>
          <div className="col-md-6">
            <img src={img2} alt="onlien" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
