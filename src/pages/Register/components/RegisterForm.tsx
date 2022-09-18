import { Link } from 'react-router-dom';

import {
  Button,
  CredentialsLayout,
  CredentialsContainer,
  CredentialsTitle,
  CredentialsForm,
  CredentialsLabel,
  CredentialsInput,
  CredentialsFooterText,
} from '../../../components/Layout/Layout';

export const RegisterForm = ({
  handleRegisterNewUser,
  inputRef,
  isVarTrue,
  setIsVarTrue,
  message,
}: {
  handleRegisterNewUser: (event: any) => Promise<void>;
  inputRef: {
    firstName: React.MutableRefObject<HTMLInputElement>;
    lastName: React.MutableRefObject<HTMLInputElement>;
    email: React.MutableRefObject<HTMLInputElement>;
    password: React.MutableRefObject<HTMLInputElement>;
    dateOfBirth: React.MutableRefObject<HTMLInputElement>;
    address: React.MutableRefObject<HTMLInputElement>;
    image: React.MutableRefObject<HTMLInputElement>;
  };
  isVarTrue: boolean;
  setIsVarTrue: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}) => {
  const { firstName, lastName, email, password, dateOfBirth, address, image } = inputRef;
  return (
    <CredentialsLayout>
      <CredentialsContainer>
        <CredentialsTitle>Register</CredentialsTitle>
        <CredentialsForm onSubmit={handleRegisterNewUser}>
          <CredentialsLabel htmlFor="firstName">
            <CredentialsInput
              autoFocus
              type="text"
              name="firstName"
              ref={firstName}
              placeholder="First Name"
              required
            />
          </CredentialsLabel>
          <CredentialsLabel htmlFor="lastName">
            <CredentialsInput
              type="text"
              name="lastName"
              ref={lastName}
              placeholder="Last Name"
              required
            />
          </CredentialsLabel>
          <CredentialsLabel htmlFor="email">
            <CredentialsInput type="email" name="email" ref={email} placeholder="Email" required />
          </CredentialsLabel>
          <CredentialsLabel htmlFor="password">
            <CredentialsInput
              type="password"
              name="password"
              ref={password}
              placeholder="Password"
              required
            />
          </CredentialsLabel>
          <CredentialsLabel htmlFor="dateOfBirth">
            <CredentialsInput
              type={isVarTrue ? 'text' : 'date'}
              onClick={() => setIsVarTrue(false)}
              name="dateOfBirth"
              ref={dateOfBirth}
              required
              placeholder="Date of Birth"
            />
          </CredentialsLabel>
          <CredentialsLabel htmlFor="address">
            <CredentialsInput
              type="text"
              name="address"
              ref={address}
              placeholder="Address"
              required
            />
          </CredentialsLabel>
          <CredentialsLabel htmlFor="url">
            <CredentialsInput
              type="url"
              name="url"
              placeholder="https://photo-example.com"
              pattern="https://.*"
              size={30}
              ref={image}
            />
          </CredentialsLabel>
          <Button type="submit">Register</Button>
        </CredentialsForm>
        <CredentialsFooterText>{message}</CredentialsFooterText>
        <CredentialsFooterText className="footer-text">
          Already have an account?
          <Link to="/login"> Login here</Link>
        </CredentialsFooterText>
      </CredentialsContainer>
    </CredentialsLayout>
  );
};
