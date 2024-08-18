"use client";
import Link from "next/link";
import { useState, createContext, useContext } from "react";

const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const LogoutBtn = () => {
  const { user } = useContext(Context);

  const LogoutHandler = () => {
    alert("Logged Out");
    // Add logic to log out the user and clear session if necessary
  };

  return (
    <>
      {user.id ? (
        <button className="btn" onClick={LogoutHandler}>
          Logout
        </button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
};

export const TodoButton = ({ id, completed }) => {
  const deleteHandler = (id) => {
    alert(`Deleting ${id}`);
    // Add logic to delete the todo item
  };

  const handleCheckboxChange = () => {
    // Add logic to handle checkbox state change
  };

  return (
    <>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={handleCheckboxChange}
      />
      <button className="btn" onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </>
  );
};
