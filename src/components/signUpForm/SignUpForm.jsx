import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

import FormInput from '../formInput/FormInput';
import Button from '../button/Button';

import './SignUpForm.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = e => {
        const { value, name } = e.target;

        setFormFields(prevState => ({
            ...prevState, [name]: value,
        }));
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e, displayName, email, password, confirmPassword) => {
        e.preventDefault();

        if (password !== confirmPassword) return;

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', err);
            }
        }
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={e => handleSubmit(e, displayName, email, password, confirmPassword)}>
                <FormInput label='Display Name' type='text' required value={displayName} name='displayName'
                           onChange={handleChange} />
                <FormInput label='Email' type='email' required value={email} name='email' onChange={handleChange} />
                <FormInput label='Password' type='password' required value={password} name='password'
                           onChange={handleChange} />
                <FormInput label='Confirm Password' type='password' required value={confirmPassword}
                           name='confirmPassword'
                           onChange={handleChange} />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;