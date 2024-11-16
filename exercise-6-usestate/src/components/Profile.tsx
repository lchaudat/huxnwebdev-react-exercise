import { ChangeEvent, FormEvent, useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({ name: "angel", age: 32 });
  const [userAge, setUserAge] = useState(0);
  const [userName, setUserName] = useState("");

  const submitHandler = (elem: FormEvent) => {
    elem.preventDefault();
    setUserInfo({ age: userAge, name: userName });
    setUserAge(0);
    setUserName("");
  };

  const changeAge = (elem: ChangeEvent<HTMLInputElement>) => {
    setUserAge(parseInt(elem.target.value));
  };
  const changeName = (elem: ChangeEvent<HTMLInputElement>) => {
    setUserName(elem.target.value);
  };

  return (
    <>
      <div>Profile Input</div>
      <p>
        username: <b>{userInfo.name}</b>
      </p>
      age: <b>{userInfo.age}</b>
      <form action="" onSubmit={submitHandler}>
        <input type="text" value={userName} onChange={changeName} />
        <input type="number" value={userAge} onChange={changeAge} />
        <button type="submit">Set user name</button>
      </form>
    </>
  );
};

export default Profile;
