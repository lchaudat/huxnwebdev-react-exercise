import AdminInfo from "./AdminInfo";
import UserInfo from "./UserInfo";

function App() {
  return (
    <>
      <UserInfo id="12" email="test@test.com" name="me" />
      <AdminInfo id="14" email="test@test.com" name="me" isadmin={true} />
    </>
  );
}

export default App;
