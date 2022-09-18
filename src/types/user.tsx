export type User = {
  firstName: React.MutableRefObject<HTMLInputElement> | undefined;
  lastName: React.MutableRefObject<HTMLInputElement> | undefined;
  email: React.MutableRefObject<HTMLInputElement> | undefined;
  password: React.MutableRefObject<HTMLInputElement> | undefined;
  address: React.MutableRefObject<HTMLInputElement> | undefined;
  image: React.MutableRefObject<HTMLInputElement> | undefined;
  dateOfBirth?: React.MutableRefObject<HTMLInputElement> | undefined;
};

export type PreviousUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  image: string;
  dateOfBirth?: string;
};

export type UpdatedUser = PreviousUser
