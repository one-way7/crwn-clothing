import { useState } from 'react';

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase';

import FormInput from '../formInput/FormInput';
import Button from '../button/Button';

import './SignInForm.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };
    const handleChange = e => {
        const { value, name } = e.target;

        setFormFields(prevState => ({
            ...prevState, [name]: value,
        }));
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e, email, password) => {
        e.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password': {
                    alert('Incorrect password for email');
                }
                    break;
                case 'auth/user-not-found': {
                    alert('No user associated with this email');
                }
                    break;
                default: {
                    console.log(err);
                }
            }
        }
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={e => handleSubmit(e, email, password)}>
                <FormInput label='Email' type='email' required value={email} name='email' onChange={handleChange} />
                <FormInput label='Password' type='password' required value={password} name='password'
                           onChange={handleChange} />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;