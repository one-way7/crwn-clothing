import SignUpForm from '../../components/signUpForm/SignUpForm';
import SignInForm from '../../components/signInForm/SignInForm';

import { AuthenticationContainer } from './AuthenticationStyles';

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
};

export default Authentication;
