import './Contact.css'
import {useState} from 'react'
import * as emailjs from 'emailjs-com'

function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [emailSent, setEmailSent] = useState(false)

    const submitEmail = (e) => {
        e.preventDefault();
        
        let template_params = {
            name: name,
            email: email,
            message: message
        }

        const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    emailjs.sendForm('gmail', 'template_jit7267',e.target,'user_ei2HwlX5HUA6Vb2BoNWPR', template_params).then((result) => {
        setEmailSent(true)
        console.log(result)
        resetForm()
    }, (error) => {
        console.log(error)
    })

      
    }

    return(
        <div className='contact'>
            {emailSent ? <h1 style={{color:'green', textAlign:'center'}}>The email was sent successfully</h1> : ''}
            <form onSubmit={(e) => submitEmail(e)}>
                <label htmlFor='name'>Name</label>
                <input type='text' onChange={(e) => setName(e.target.value)} value={name} name='name'/>

                <label htmlFor='email'>Email</label>
                <input type='email' onChange = {(e) => setEmail(e.target.value)}  name='email' value={email}/>

                <label htmlFor='message'>Message</label>
                <textarea rows='5' cols='48' onChange = {(e) => setMessage(e.target.value)} name='message' value={message}/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact