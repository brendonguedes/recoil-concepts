import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { usernameState } from "./atoms";
import { upperUsername } from "./atoms/selector";
// import { lastnameState } from "./atoms";

function App() {
  const username = useRecoilValue(usernameState);
  
  // const lastname = useRecoilValue(lastnameState);
  
  const [userEdit, setUserEdit] = useRecoilState(usernameState);

  const usernameUpper = useRecoilValue(upperUsername);

  return (
    <>
      <h1>{username}</h1>
      <br />
      Username:
     <input 
      placeholder="Insert your name" 
      value={userEdit}
      onChange={(e) => setUserEdit(e.target.value)}
      />
      <br />
      Uppercase: 
      <span>{usernameUpper}</span>
    </>
  )
}

export default App;