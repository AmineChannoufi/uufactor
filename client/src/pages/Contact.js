import React from 'react'
 import emailjs from 'emailjs-com';
//import './contact.css'
import Navigation from './Navigation';
function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_eta0q9g', 'template_ownp52p', e.target, 'dL6d7A0J2FlVxWeus')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        e.target.reset()
        }

  return (
    <div >
           <Navigation />
      <div className='container'>
        <form onSubmit={sendEmail}>
        <div className='row pt-5 mx-auto'>
        <div className='col-8 form-group mx-auto'>
            <input type="text" className="form control" placeholder="name" name="name"/>
        </div>
        <div className='col-8 form-group pt-2 mx-auto'>
            <input type="text" className="form control" placeholder="Email Adress" name="email"/>
        </div>
        <div className='col-8 form-group pt-2 mx-auto'>
            <input type="text" className="form control" placeholder="Subject" name="subject"/>
        </div>
        <div className='col-8 form-group pt-2 mx-auto'>
            <textarea type="text" className="form control" id="" cols="30" rows="8" placeholder="Your message" name="message"/>
        </div>
        <div className='col-8 pt-3 mx-auto'>
            <input type="submit" className="btn btn-info" value="Send message" />
        </div>

        </div>



        </form>
      </div>
  </div>
  
       
           
      
  )
}

export default Contact