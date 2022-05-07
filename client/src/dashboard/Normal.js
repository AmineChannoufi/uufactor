import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";

//import "./Normal.css";

import { Navbar, Container, Nav} from "react-bootstrap";

const Normal = () => {
  const nav = useNavigate();
  const [adherentReg, setAdherentReg] = useState("");
  const [adresseReg, setAdresseReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [nomReg, setNomReg] = useState("");
  const [activiteReg, setActiviteReg] = useState("");
  const [teleReg, setTeleReg] = useState("");
  const [identReg, setIdentReg] = useState("");
  const [respReg, setRespReg] = useState("");
  const [cinReg, setCinReg] = useState("");
  const [personneReg, setPersonneReg] = useState("");
  const [ribReg, setRibReg] = useState("");
  const [caReg, setCaReg] = useState("");
  const [modeReg, setModeReg] = useState("");
  const [delaiReg, setDelaiReg] = useState("");
  const [encoursReg, setEncoursReg] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);


  Axios.defaults.withCredentials = true;

  const registerr = () => {
   
    Axios.post("http://localhost:3001/registerr", {
      adherent: adherentReg,
      adresse: adresseReg,
      username: usernameReg,
      nom: nomReg,
      activite: activiteReg,
      tele: teleReg,
      ident: identReg,
      resp: respReg,
      cin: cinReg,
      personne: personneReg,
      rib: ribReg,
      ca: caReg,
      mode: modeReg,
      delai: delaiReg,
      encours: encoursReg,
    })
      .then((res) => {
        setAdherentReg("");
        setAdresseReg("");
        setUsernameReg("");
        setNomReg("");
        setActiviteReg("");
        setTeleReg("");
        setIdentReg("");
        setRespReg("");
        setCinReg("");
        setPersonneReg("");
        setRibReg("");
        setCaReg("");
        setModeReg("");
        setDelaiReg("");
        setEncoursReg("");
        setMessage(res.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="navigaton">
      
      <Link to="/Suivie ">
           <div className="btn btn-edit">
               Suivie
           </div>
           </Link>
        <br></br>
        <div className="deamnde">
          {/* <Alert message={message} show={show} 
          
          /> */}
          <div className="form-groupe">
            <label>Adherent :</label>
            <input
              className="input-fielde"
              name="adherent"
              type="text"
              value={adherentReg}
              onChange={(e) => setAdherentReg(e.target.value)}
            />
          </div>
          <div className="form-groupe">
            <label>Adresse :</label>
            <input
              className="input-fielde"
              name="adresse"
              type="text"
              value={adresseReg}
              onChange={(e) => setAdresseReg(e.target.value)}
            />
          </div>
          <div className="form-groupe">
            <label>Username :</label>
            <input
              className="input-fielde"
              name="username"
              type="text"
              value={usernameReg}
              onChange={(e) => setUsernameReg(e.target.value)}
            />
          </div>
          <div className="objet">
            <h3>Objet de la demande :</h3>
            <div>
              <input type="checkbox" className="increase" />
              <label for="nouvelle">Nouvelle demande</label>
            </div>
            <div>
              <input type="checkbox" className="increase" />
              <label for="aug">
                Demande d’augmentation de l’autorisation accordée
              </label>
            </div>
            <div>
              <input type="checkbox" className="increase" />
              <label for="aug">
                Demande de renouvellement de l’autorisation (pour les
                autorisations avec limite de validité)
              </label>
            </div>
          </div>
          <div className="renseignement">
           
              <h3>renseignements sur l'acheteur</h3> 
            
            <table border="0"></table>
            <div className="form-groupe">
              <label>Nom ou raison sociale : :</label>
              <input
                className="input-fielde"
                name="nom"
                type="text"
                value={nomReg}
                onChange={(e) => setNomReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Activité :</label>
              <input
                className="input-fielde"
                name="activite"
                type="text"
                value={activiteReg}
                onChange={(e) => setActiviteReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>N° de téléphone :</label>
              <input
                className="input-fielde"
                name="tele"
                type="text"
                value={teleReg}
                onChange={(e) => setTeleReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>N° Identifiant Unique :</label>
              <input
                className="input-fielde"
                name="tele"
                type="text"
                value={identReg}
                onChange={(e) => setIdentReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Nom et qualité du 1 er responsable :</label>
              <input
                className="input-fielde"
                name="resp"
                type="text"
                value={respReg}
                onChange={(e) => setRespReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>CIN :</label>
              <input
                className="input-fielde"
                name="cin"
                type="text"
                value={cinReg}
                onChange={(e) => setCinReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Personne à contacter (comptabilité fournisseur):</label>
              <input
                className="input-fielde"
                name="personne"
                type="text"
                value={personneReg}
                onChange={(e) => setPersonneReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Domiciliation bancaire : (RIB complet)</label>
              <input
                className="input-fielde"
                name="personne"
                type="text"
                value={ribReg}
                onChange={(e) => setRibReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>CA projecté avec cet acheteur</label>
              <input
                className="input-fielde"
                name="ca"
                type="text"
                value={caReg}
                onChange={(e) => setCaReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Mode de règlement</label>
              <input
                className="input-fielde"
                name="mode"
                type="text"
                value={modeReg}
                onChange={(e) => setModeReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Délai de règlement</label>
              <input
                className="input-fielde"
                name="delai"
                type="text"
                value={delaiReg}
                onChange={(e) => setDelaiReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Encours demandé</label>
              <input
                className="input-fielde"
                name="encours"
                type="text"
                value={encoursReg}
                onChange={(e) => setEncoursReg(e.target.value)}
              />
            </div>
            <div className="button-box">
              <button className="submit-btn" onClick={registerr}>
                {" "}
                Register{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Normal;
