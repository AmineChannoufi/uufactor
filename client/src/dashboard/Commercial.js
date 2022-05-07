import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function Commercial() {
    const [data, setData] = useState([]);
    useEffect(async () => {
      await axios.get("http://localhost:3001/select/users").then((res) => {
        setData(res.data);
      });
    });
  
    const nav = useNavigate();
    const deleteContact = (id) => {
        if (window.confirm("are you sure to delete this user ?")) {
          console.log(id);
          axios.delete(`http://localhost:3001/delete/user/${id}`);
        //   toast.success("contact deleted successfully");
          // setTimeout(()=>loadData(),500)
        }
      };
  return (
    <div style={{ marginTop: "150px" }}>
        <center><h2>Welcome to Admin dashboard</h2></center>
    <table className="styled-table">
      <thead>
        <tr>
        <th style={{ textAlign: "center" }}>Num </th>

          <th style={{ textAlign: "center" }}>Nom</th>
          <th style={{ textAlign: "center" }}>Email</th>
          <th style={{ textAlign: "center" }}>Role</th>
          <th style={{ textAlign: "center" }}>Telephone</th>
          <th style={{ textAlign: "center" }}>Societe</th>
          <th style={{ textAlign: "center" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.telephone}</td>
              <td>{item.societe}</td>

             
              <td>
                <Link to={`/Edite/${item.id}`}>
                  <button className="btn btn-edit">Edit</button>
                </Link>
                <button
                  className="btn btn-delete"
                  onClick={() => deleteContact(item.id)}
                >
                  Delete
                </button>
                <Link to={`/Aff/${item.id}`}>
                  <button className="btn btn-view">View</button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default Commercial