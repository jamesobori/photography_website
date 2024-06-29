import './Contacts.css';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='contacts-me'>
                <h3>For my Services follow me on:</h3>
                <ul className='me'>
                <li><a href= "/">Facebook</a></li>
                <li><a href= "/">Instagram</a></li>
                <li><a href= "/">Youtube</a></li>
                </ul>
                <h4>Fill the form below if interested</h4>
                <form className='myForm'>
                    <div>
                       <input type='text' name='Full-Name'
                    placeholder='Your Name'/>
                    </div>
                    <div className='form'>
                        <input type='email' name='Email'
                        placeholder='Your Email'/>
                    </div>
                    <div>
                        <div className='form'>
                            <input type='service' name='service'
                            placeholder='service'/>
                        </div>
                        <div>
                            <div className='form'>
                                <textarea name='message' placeholder='Your Message'></textarea>
                            </div>
                            <button type='submit'>Send Message</button>
                        </div>
                    </div>

                </form>
           
            </div>

        </div>
    )
}
export default Contacts;