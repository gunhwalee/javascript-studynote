import { useRef } from "react";
import userStore from "../zustand/store";

const Hello = () => {
  const [firstName, updateFirstName, lastName, updateLastName] =
    userStore(state => [state.firstName, state.updateFirstName, state.lastName, state.updateLastName]);
  const nameRef = useRef<HTMLInputElement>();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFirstName(event.currentTarget.value);
  };

  const clickHandler = () => {
    updateLastName(nameRef.current.value);
  };

  return (
    <>
      <h1>Hello Zustand!!</h1>
      <label>
        First Name
        <input
          onChange={inputHandler}
          value={firstName}
        />
      </label>
      <br></br>
      <label>
        Last Name
        <input
          ref={nameRef}
        />
        <button onClick={clickHandler}>last name</button>
      </label>
      <p>Hello, <strong>{firstName} {lastName}!</strong></p>
    </>
  );
}

export default Hello;
