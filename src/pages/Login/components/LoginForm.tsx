import { Link } from 'react-router-dom';

import {
  Button,
  ButtonLink,
  CredentialsLayout,
  CredentialsContainer,
  CredentialsTitle,
  CredentialsForm,
  CredentialsLabel,
  CredentialsInput,
  CredentialsFooterText,
} from '../../../components/Layout/Layout';

export const LoginForm = ({
  handleSubmit,
  loginSuccessful,
  email,
  password,
  message,
}: {
  handleSubmit: (event: any) => Promise<void>;
  loginSuccessful: boolean;
  email: React.MutableRefObject<string>;
  password: React.MutableRefObject<string>;
  message: string | null;
}) => (
  <CredentialsLayout>
    <CredentialsContainer isSuccessfull={loginSuccessful}>
      <CredentialsTitle>{loginSuccessful ? 'Login Successful' : 'Login'}</CredentialsTitle>

      {loginSuccessful ? (
        <ButtonLink to="/profile">Go to Profile Page</ButtonLink>
      ) : (
        <>
          <CredentialsForm data-testid="login-form" id="myForm" onSubmit={handleSubmit}>
            <CredentialsLabel htmlFor="login">
              <CredentialsInput
                autoFocus
                autoComplete="off"
                type="text"
                name="login"
                placeholder="Email"
                ref={email}
                required
              />
            </CredentialsLabel>

            <CredentialsLabel htmlFor="password">
              <CredentialsInput
                type="password"
                name="password"
                placeholder="Password"
                ref={password}
                required
              />
            </CredentialsLabel>
            <Button type="submit">Login</Button>
          </CredentialsForm>
          <CredentialsFooterText>{message}</CredentialsFooterText>
          <CredentialsFooterText className="footer-text">
            Don`&apos;`t have an account?
            <Link to="/register"> Register here</Link>
          </CredentialsFooterText>
        </>
      )}
    </CredentialsContainer>
  </CredentialsLayout>
);
