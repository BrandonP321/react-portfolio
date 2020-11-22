import React from 'react'
import './index.css'

export default function ContactForm() {
    return (
        <form>
            <h1 className='text-center'>Contact Me</h1>
            <div className="form-group">
                <label for="NameInput">Name</label>
                <input type="email" className="form-control" id="NameInput" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label for="emailInput">Email address</label>
                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
            </div>
            <div class="form-group">
                <label for="messageInput">Message</label>
                <textarea class="form-control" id="messageInput" rows="3"></textarea>
            </div>
        </form>
    )
}
