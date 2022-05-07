import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'
import "./Vieww.css";

function Vieww() {
    const[user,setUser]=useState({})
    const{id}=useParams();
    useEffect(async () => {
        await axios
          .get(`http://localhost:3001/demandee/${id}`)
          .then((resp)=>setUser({ ...resp.data[0]}))
            
      }, [id]);
    
  return (
    <div style={{marginTop:"150px"}}>
        <div className='card'>
        <div className="card-header">
            <p>User Contact Deltails</p>
        </div>
        <div className='container'>
           <strong>ID :</strong> 
           <span>{id}</span>
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

export default Vieww