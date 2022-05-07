import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'
// import "./Aff.css";

function Aff() {
    const[user,setUser]=useState({})
    const{id}=useParams();
    useEffect(async () => {
        await axios
          .get(`http://localhost:3001/select/user/${id}`)
          .then((resp)=>setUser({ ...resp.data[0]}))
            
      }, [id]);
      console.log(id)
    console.log(user.name)
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
           <strong>Nom:</strong> 
           <span>{user.name}</span>
           <br />
           <br />
           <strong>Email:</strong> 
           <span>{user.email}</span>
           <br />
           <br />
           <strong>Role :</strong> 
           <span>{user.role}</span>
           <br />
           <br />
           <strong>Societe:</strong> 
           <span>{user.societe}</span>
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

export default Aff