import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function CRUD() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:3001/demande").then((res) => {
      setData(res.data);
    });
  });

  const nav = useNavigate();

  const logout = () => {
    // e.preventDefault()
    localStorage.clear();
    nav("/login");
  };
  //rejeter la demande par la direction comemercial  : 
  const rejeter = (id) => {
    if (window.confirm("êtes-vous sûr de rejeter cette demande ?")) {
      console.log(id);
      axios.put(`http://localhost:3001/rejetercommercial/${id}`);
      toast.success("deamnde rejeter avec succés !");
      // setTimeout(()=>loadData(),500)
    }
  };
  //valider demande par la direction comemrcial :
  const valider = (id) => {
    if (window.confirm("êtes-vous sûr d'accepter cette demande ?")) {
      console.log(id);
      axios.put(`http://localhost:3001/validercommercial/${id}`);
      toast.success("deamnde accepté avec succés !");
      // setTimeout(()=>loadData(),500)
    }
  };
  const deleteContact = (id) => {
    if (window.confirm("êtes-vous sûr de supprimer cette demande ?")) {
      console.log(id);
      axios.delete(`http://localhost:3001/delete/demande/${id}`);
      toast.success("contact deleted successfully");
      // setTimeout(()=>loadData(),500)
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Num</th>
            <th style={{ textAlign: "center" }}>adherent</th>
            <th style={{ textAlign: "center" }}>ident</th>
            <th style={{ textAlign: "center" }}>rib</th>
            <th style={{ textAlign: "center" }}>ca</th>
            <th style={{ textAlign: "center" }}>remarque</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.adherent}</td>
                <td>{item.ident}</td>
                <td>{item.rib}</td>
                <td>{item.ca}</td>
                <td>
                  <button type="button" class="btn btn-success"
                   onClick={() => valider(item.id)}
                  >
                    Valider
                  </button>
                  <button type="button" class="btn btn-danger"
                   onClick={() => rejeter(item.id)}
                  >
                    Rejeter
                  </button>
                </td>
                <td>
                  <Link to={`/edit/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteContact(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/Vieww/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
