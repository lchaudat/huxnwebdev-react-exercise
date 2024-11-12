interface User {
  isAdmin: boolean;
  loggedIn: boolean;
}

const UserStatus = function ({ isAdmin, loggedIn }: User) {
  if (isAdmin && loggedIn) {
    return <h1>Welcome back admin</h1>;
  }
  return <h1>welcome user</h1>;
};

export default UserStatus;
