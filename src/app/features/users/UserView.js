import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const { isLoading, users, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>Users Post</h1>
      {isLoading && <h3>Loading ....</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {users &&
          users.map((user) => {
            return (
              <article>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default UserView;
