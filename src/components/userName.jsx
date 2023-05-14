import useFetchUsers from "../utils/useFetchUser";

const UserName = () => {
  const { users } = useFetchUsers();
  return (
    <>
      <h1>User Name</h1>
      <ul>
        {users?.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
};

export default UserName;
