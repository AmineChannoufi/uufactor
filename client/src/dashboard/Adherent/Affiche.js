import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'
import "./Affiche.css";

function Affiche() {

    const[user,setUser]=useState({})
    const userid=localStorage.getItem("userid");
    useEffect(async () => {
        await axios
          .get(`http://localhost:3001/user/${userid}`)
          .then((resp)=>setUser({ ...resp.data[0]}))
            
      }, [userid]);
      console.log(user.ident)
    
  return (
    <div style={{marginTop:"150px"}}>
        <div className='card'>
        <div className="card-header">
            <p>Les donnees de la demandes : </p>
        </div>
        <div className='container'>
           <strong>ID :</strong> 
           <span>{userid}</span>
           <br />
           <br />
           <strong>Adherent:</strong> 
           <span>{user.adherent}</span>
           <br />
           <br />
           <strong>Identi:</strong> 
           <span>{user.ident}</span>
           <br />
           <br />
           <strong>Rib :</strong> 
           <span>{user.rib}</span>
           <br />
           <br />
           <strong>Chifrre d'affaire:</strong> 
           <span>{user.ca}</span>
           <br />
           <br />
           <Link to="/Main">
           <div className="btn btn-edit">
               Go Back
           </div>
           </Link>
        </div>
        </div>

    </div>
  )
}

export default Affiche