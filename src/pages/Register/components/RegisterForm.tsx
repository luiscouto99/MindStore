// @ts-nocheck
import { Link } from "react-router-dom";

import { Button, CredentialsLayout, CredentialsContainer, CredentialsTitle, CredentialsForm, CredentialsLabel, CredentialsInput, CredentialsFooterText } from '../../../components/Layout/Layout';

export const RegisterForm = ({ handleRegisterNewUser, firstName, lastName, email, password, isVarTrue, setIsVarTrue, dateOfBirth, address, message, image }: { handleRegisterNewUser: () => void, firstName:string, lastName: string, email:string, password:string, isVarTrue: boolean, setIsVarTrue: React.Dispatch<React.SetStateAction<boolean>>, dateOfBirth:string, address:string, message:string, image:string}) => {
    return (
        <CredentialsLayout>
            <CredentialsContainer>
                <CredentialsTitle>Register</CredentialsTitle>
                <CredentialsForm onSubmit={handleRegisterNewUser}>
                    <CredentialsLabel htmlFor="firstName">
                        <CredentialsInput autoFocus type="text" name="firstName" ref={firstName} placeholder="First Name" required />
                    </CredentialsLabel>
                    <CredentialsLabel htmlFor="lastName">
                        <CredentialsInput type="text" name="lastName" ref={lastName} placeholder="Last Name" required />
                    </CredentialsLabel>
                    <CredentialsLabel htmlFor="email">
                        <CredentialsInput type="email" name="email" ref={email} placeholder="Email" required />
                    </CredentialsLabel>
                    <CredentialsLabel htmlFor="password">
                        <CredentialsInput type="password" name="password" ref={password} placeholder="Password" required />
                    </CredentialsLabel>
                    <CredentialsLabel htmlFor="dateOfBirth">
                        <CredentialsInput type={isVarTrue ? "text" : "date"} onClick={() => setIsVarTrue(false)} name="dateOfBirth" ref={dateOfBirth} required placeholder="Date of Birth" />
                    </CredentialsLabel>
                    <CredentialsLabel htmlFor="address">
                        <CredentialsInput type="text" name="address" ref={address} placeholder="Address" required />
                    </CredentialsLabel>
                    <CredentialsLabel htmlFor="url">
                        <CredentialsInput type="url" name="url" id="url" placeholder="https://photo-example.com" pattern="https://.*" size="30" ref={image}></CredentialsInput>
                    </CredentialsLabel>
                    <Button type="submit">
                        Register
                    </Button>
                </CredentialsForm>
                <CredentialsFooterText>{message}</CredentialsFooterText>
                <CredentialsFooterText className="footer-text">
                    Already have an account?
                    <Link to="/login"> Login here</Link>
                </CredentialsFooterText>
            </CredentialsContainer>
        </CredentialsLayout>
    )
}