import React from 'react'
import './From.css'
const Form_wave = () => {
    return (
        <div className='container'>
            <h1>Please login</h1>
            <form>
                <div className='form-control'>
                    <input type='text' required />
                    <label>
                        <span style={{ transitionDelay: "0ms" }}>E</span>
                        <span style={{ transitionDelay: "50ms" }}>m</span>
                        <span style={{ transitionDelay: "100ms" }}>a</span>
                        <span style={{ transitionDelay: "150ms" }}>i</span>
                        <span style={{ transitionDelay: "200ms" }}>l</span>

                    </label>
                </div>
                <div className='form-control'>
                    <input type='password' required />
                    <label>
                        <span style={{ transitionDelay: "0ms" }}>P</span>
                        <span style={{ transitionDelay: "50ms" }}>a</span>
                        <span style={{ transitionDelay: "100ms" }}>s</span>
                        <span style={{ transitionDelay: "150ms" }}>s</span>
                        <span style={{ transitionDelay: "200ms" }}>w</span>
                        <span style={{ transitionDelay: "250ms" }}> o</span >
                        <span style={{ transitionDelay: "300ms" }}> r</span >
                        <span style={{ transitionDelay: "350ms" }}> d</span >
                    </label >
                </div >
                <button className='btn'>Login</button>
                <p className='text'>
                    "Donot have a acount?"<a href='#'>Register</a>
                </p>
            </form >
        </div >
    )
}

export default Form_wave
