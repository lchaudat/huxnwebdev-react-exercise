import Greetings from "./components/Greetings";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <Weather temperature={30} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <Greetings TimeOfDay="morning" />
    </>
  );
}

export default App;
