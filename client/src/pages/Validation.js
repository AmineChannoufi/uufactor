import React from 'react'

const Validation=(values)=> {
    let errors={};
    if(!values.username){
        errors.username="name is required ."
    }
    if(!values.telephone){
        errors.telephone="telephone is required ."
    }
    if(!values.email){
        errors.email="email is required ."
    }
    if(!values.societe){
        errors.societe="societe is required ."
    }
    if(!values.password){
        errors.password="password is required ."
    }else if(values.password.length<5){
        errors.password="password must be more than 5 caracters"
    }

  return errors;
}
export default Validation;
