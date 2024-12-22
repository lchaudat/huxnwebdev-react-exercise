import { type admininfo } from "./types";

const AdminInfo = ({ id, email, name, isadmin }: admininfo) => {
  return (
    <div>
      <h1>ADMIN</h1>
      <div>
        {id}
        <br />
        {email}
        <br />
        {name}
        <br />
        {String(isadmin)}
      </div>
    </div>
  );
};
export default AdminInfo;
