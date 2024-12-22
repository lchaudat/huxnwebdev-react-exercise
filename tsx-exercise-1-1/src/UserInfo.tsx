import { info } from "./types";

const UserInfo = ({ id, email, name }: info) => {
  return (
    <div>
      {id}
      <br />
      {email}
      <br />
      {name}
    </div>
  );
};
export default UserInfo;
