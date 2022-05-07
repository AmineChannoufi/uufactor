import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import "./Update.css";

import { toast } from "react-toastify";
// import "./Details.css";




function UpdateUser() {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/update/${id}`, {
        adherent:adherent,
        ident:ident,
        rib:rib,
        ca:ca
      })
      .then(() => {
       setAdherent("");
       setIdent("");
       setRib("");
       setCa("");
      })
      .catch((err) => toast.error(err.response.data));
    toast.success("conctact update succefully");
    setTimeout(()=>history.push("/"),500)
  };

  const history = useNavigate();
   const { id } = useParams();
  useEffect(async () => {
    await axios
      .get(`http://localhost:3001/demandee/${id}`)
      .then(res=>{
        console.log(res.data[0])
        const datausuario=res.data[0]
        setAdherent(datausuario.adherent)
        setIdent(datausuario.ident)
        setRib(datausuario.rib)
        setCa(datausuario.ca)
      })



  }, []);


  const [adherent,setAdherent]=useState("");
  const [ident,setIdent]=useState("");
  const [rib,setRib]=useState("");
  const [ca,setCa]=useState("");

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <h1>{id}</h1>

        <label htmlFor="adherent">adherent</label>
        <input
          type="text" value={adherent} 
          onChange={(e)=>{setAdherent (e.target.value)}}   />
         
         
          
        

        <label htmlFor="ident">ident</label>
        <input type="text"   value={ident} 
          onChange={(e)=>{setIdent (e.target.value)}}/>
        <label>rib</label>
        <input type="text"  value={rib} 
          onChange={(e)=>{setRib (e.target.value)}} ></input>
        <label>ca</label>
        <input type="text" value={ca} 
          onChange={(e)=>{setCa (e.target.value)}} ></input>
        <input type="submit" onClick={handleSubmit} value="save"  />
        <Link to={"/SuivieDemande"}>
            <button className="btn btn-edit">go back</button>
            </Link>
      </form>
    </div>
  );
}

export default UpdateUser;
