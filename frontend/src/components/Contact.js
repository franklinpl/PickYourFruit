import './Contact.css'
import {useState} from 'react'

function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    return(
        <div className='contact'>
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' onChange={(e) => onChangeName(e)} value={name}/>

                <label htmlFor='email'>Email</label>
                <input type='email' onChange = {(e) => onChangeEmail(e)}  value={email}/>

                <label htmlFor='phone'>Phone</label>
                <input type='tel' onChange = {(e) => onChangePhone(e)}  value={phone}/>

                <label htmlFor='message'>Message</label>
                <textarea rows='5' cols='48' onChange = {(e) => onChangeMessage(e)}  value={message}/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact