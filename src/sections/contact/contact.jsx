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
        company : '',
        role : '',
        country : ''
    }

    const [contact, setContact] = useState({
        firstname : '',
        lastname : '',
        email : '',
        phone : '',
        company : '',
        role : '',
        country : 'Nigeria'
    })

    const [sentmail, setsentmail] = useState(false)

    const handleSubmit = async e => {
        
        e.preventDefault();

        await contactForm(contact)
        await setContact(initialState)
        
        await setsentmail(true);

        setTimeout(() => {
            setsentmail(false)
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

        <div className="contact" id = 'contact'>

            <PipelineTube/>

            <div className="contact_content">
                <h1>gironet is better {<br></br>} together, request {<br></br>} for a demo today. </h1>
                <p>Our team is happy to answer your questions and give you more details about our products. Fill out the form or send an email, and we’ll get in touch.</p>
            </div>
            
            <div className="connect">
                
                <h1>Contact Sales</h1>
            
                <form onSubmit = {handleSubmit} className="contact_form">

                    <div className="nameDiv">
                        <input type="text" name = 'firstname' placeholder = 'Firstname' required value = {contact.firstname} onChange = { handleChange } />
                        <input type="text" name = 'lastname' placeholder = 'Lastname' required value = {contact.lastname} onChange = { handleChange }/>
                    </div>

                    <div className="baseInput">
                        <input type="email"  name = 'email' placeholder = 'Email Address' required value = {contact.email} onChange = { handleChange }/>
                    </div>

                    <div className="baseInput">
                        <input type="text" name = 'phone' placeholder = 'Phone Number' required value = {contact.phone} onChange = { handleChange }/>
                    </div>

                    <div className="nameDiv">
                        <input type="text" name = 'company' placeholder = 'Company Name' required value = {contact.company} onChange = { handleChange }/>
                        <input type="text" name = 'role' placeholder = 'Role' required value = {contact.role} onChange = { handleChange }/>
                    </div>

                    <div className="select">
                        <select id="select-country" required >
                            <option value="" > -- Select Country -- </option>
                            <option value="nigeria" > Nigeria </option>
                        </select>
                    </div>

                    <div className="submit">
                        <button>Request Demo</button>
                    </div>

                </form>

                <div className="successMail" style = { { display : sentmail ? 'flex' : 'none' } } >

                    <Sent/>
                    
                    <div className="inform">
                        <h1>Request sent successfully</h1>
                        <p>Thank you for reaching out to us {contact.firstname}, an email will be sent to you shortly  </p>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default Contact;
