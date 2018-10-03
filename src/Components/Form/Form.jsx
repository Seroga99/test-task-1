import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <form className='form' >
            <div className='form__inputs'>
                <input className='form__input' type="email"  placeholder="Enter your email..."/>
                <input className='form__input' type="password" placeholder='Enter your password...'/>
                <input className='form__input' type="text" placeholder='Enter your name...'/>
            </div>
            <div className='btn__container'>
                <button type='submit' className='form__btn'>Log up</button>
            </div>
        </form>
    );
};

export default Form;