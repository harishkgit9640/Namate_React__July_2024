import React from 'react'
import ClassCompo from './ClassCompo'

const Contact = () => {
    return (
        <>
            <div className="contact-section">
                <div className="wrapper">
                    <div className="header"> Get In Touch. </div>
                    <form action="">
                        <div className="form-item">
                            <label htmlFor="Name">Full Name</label>
                            <input type="text" name="name" id="" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="email" id="" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="Message">Message</label>
                            <textarea name="message" id=""></textarea>
                        </div>
                        <button type="submit" className='btn submit-btn'>Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contact