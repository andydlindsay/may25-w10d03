interface IUser {
  email: string;
  password: string;
}

const login = (user: IUser): boolean => {
  if (user.email === 'jstamos@stamos.com') {
    return true;
  }
  return false;
};

const user = {
  email: 'frank@a.com',
  password: '1234'
};

const myUser: IUser = {} as IUser;
myUser.password = 'hello';

login(user);
