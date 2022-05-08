import React,{useState} from 'react';
import './contact.scss'
import PipelineTube from '../../components/pipeline/PipelineTube'
import {contactForm} from '../../firebase/contactSales'
import {ReactComponent as Sent} from '../../assets/success.svg'

const Contact = () => {

    const initialState = {
        firstname : '',
        lastname : '',
        email : '',
        phone : '',
        country : ''
    }

    const [contact, setContact] = useState({
        firstname : '',
        lastname : '',
        email : '',
        phone : '',
        country : 'Nigeria'
    })

    const [sentmail, setsentmail] = useState(false)

    const handleSubmit = async e => {
        
        e.preventDefault();



        await contactForm(contact)
        
        await setsentmail(true);

        setTimeout(() => {
            setsentmail(false)
            setContact(initialState)
        }, 3000);

    }

    const handleChange = (e) => {

        const {name, value} = e.target;
    
        setContact(data => {
          return {
            ...data,
            [name] : value
          }
        })
    
      }

    return (
        
        <div></div>

        // <div className="contact" id = 'contact'>

        //     <div className="contact_content">
        //         <h1>Excited...? {<br></br>} download the App, {<br></br>} unsure...? {<br></br>} still download the app 😂 </h1>
        //     </div>
            
        //     {/* <div className="connect">
                
        //         <h1>Join Waitlist</h1>
            
        //         <form onSubmit = {handleSubmit} className="contact_form">

        //             <div className="nameDiv">
        //                 <input type="text" name = 'firstname' placeholder = 'Firstname' required value = {contact.firstname} onChange = { handleChange } />
        //                 <input type="text" name = 'lastname' placeholder = 'Lastname' required value = {contact.lastname} onChange = { handleChange }/>
        //             </div>

        //             <div className="baseInput">
        //                 <input type="email"  name = 'email' placeholder = 'Email Address' required value = {contact.email} onChange = { handleChange }/>
        //             </div>

        //             <div className="baseInput">
        //                 <input type="text" name = 'phone' placeholder = 'Phone Number' required value = {contact.phone} onChange = { handleChange }/>
        //             </div>

        //             <div className="select">
        //                 <select id="select-country" required >
        //                     <option value="" > -- Select Country -- </option>
        //                     <option value="nigeria" > Nigeria </option>
        //                 </select>
        //             </div>

        //             <div className="submit">
        //                 <button>Join Waitlist</button>
        //             </div>

        //         </form>

        //         <div className="successMail" style = { { display : sentmail ? 'flex' : 'none' } } >

        //             <Sent/>
                    
        //             <div className="inform">
        //                 <h1>Request sent successfully</h1>
        //                 <p>Thank you for joining the waitlist <strong>{contact.firstname}</strong>, an email will be sent to you shortly  </p>
        //             </div>

        //         </div>

        //     </div> */}

        // </div>

    );
}

export default Contact;
