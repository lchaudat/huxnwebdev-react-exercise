import { useState } from "react";

interface profile {
  name: string;
  username: string;
  age: number;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<profile>({
    name: "",
    username: "",
    age: 0,
  });

  const updateName = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };

  const updateUserName = (username: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, username }));
  };

  const updateage = (age: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, age: Number(age) }));
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>name: {profile.name}</div>
      <div>username: {profile.username}</div>
      <div>age: {profile.age}</div>
      <input
        type="text"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="text"
        value={profile.username}
        onChange={(e) => updateUserName(e.target.value)}
      />
      <input
        type="number"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => updateage(e.target.value)}
      />
    </div>
  );
};
export default UserProfile;
