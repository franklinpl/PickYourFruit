import './Contact.css'
import {useState} from 'react'
import axios from 'axios'

function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const onChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const submitEmail = (e) => {
        e.preventDefault();
        
        let data = {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        }

        const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('')
    }

        axios({
            method:'POST',
            url:'http://localhost:5000/',
            data: data
        }).then((response) => {
            if (response.data.status == 'success') {
                console.log('Message sent');
                resetForm()
            }
            else if (response.data.status == 'fail') {
                console.log('message failed to send')
            }
        })
    }

    return(
        <div className='contact'>
            <form onSubmit={(e) => submitEmail(e)}>
                <label htmlFor='name'>Name</label>
                <input type='text' onChange={(e) => onChangeName(e)} value={name}/>

                <label htmlFor='email'>Email</label>
                <input type='email' onChange = {(e) => onChangeEmail(e)}  value={email}/>

                <label htmlFor='phone'>Phone</label>
                <input type='tel' onChange = {(e) => onChangePhone(e)}  value={phone}/>

                <label htmlFor='subject'>Subject</label>
                <input type='text' onChange = {(e) => onChangeSubject(e)}  value={subject}/>

                <label htmlFor='message'>Message</label>
                <textarea rows='5' cols='48' onChange = {(e) => onChangeMessage(e)}  value={message}/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact