import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, RootState, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import useThunk from "../hooks/useThunk";
import UserListItem from "./UserListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doAddUser, isAddingUser, addingUserError] = useThunk(addUser);
  const { data } = useSelector((state: RootState) => state.users);
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);
  const handleUserAdd = () => {
    doAddUser();
  };
  const renderedUsers = useMemo(() => {
    const tempUsers = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
    return tempUsers;
  }, [data]);
  return (
    <>
      <div className="m-3 flex flex-row justify-between items-center">
        <h1 className="m-2 text-6xl font-extrabold">Users</h1>
        <Button loading={isAddingUser} onClick={handleUserAdd}>
          Add user
        </Button>
        {addingUserError && addingUserError.message}
      </div>
      <>
        {isLoadingUsers ? (
          <Skeleton amount={4} className="h-10 w-full" />
        ) : loadingUsersError ? (
          <div>{loadingUsersError.message}</div>
        ) : (
          <div>{renderedUsers}</div>
        )}
      </>
    </>
  );
}

export default UsersList;
