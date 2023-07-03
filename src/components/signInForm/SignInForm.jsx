import { useState } from 'react';

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase';

import FormInput from '../formInput/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';

import { ButtonsContainer, SignInContainer } from './SignInFormStyles';

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
            ...prevState,
            [name]: value,
        }));
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e, email, password) => {
        e.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password,
            );
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    {
                        alert('Incorrect password for email');
                    }
                    break;
                case 'auth/user-not-found':
                    {
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
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={e => handleSubmit(e, email, password)}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    value={email}
                    name="email"
                    onChange={handleChange}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    value={password}
                    name="password"
                    onChange={handleChange}
                />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;