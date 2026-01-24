import React, { useState } from "react";

const App = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [AllUsers, setAllUsers] = useState([]);

  function submithandler(e) {
    e.preventDefault();
    let newAllUsers = [...AllUsers]; //destructuring
    newAllUsers.push({ Username, Email });
    setAllUsers(newAllUsers); //so that the previous values will be not overwritten
    console.log(newAllUsers);
    //setAllUsers([...AllUsers, {Username, Email}]) //alternative solution to last 3 lines
    setUsername("");
    setEmail("");
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={Username}
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Name"
          value={Email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>Go</button>
      </form>
      {AllUsers.map((user) => {
        return (
          <div>
            {user.Username},{user.Email}
          </div>
        );
      })}
    </div>
  );
};

export default App;

//onChange is two-way-binding so that we can have react as a mediator to interact with DOM
//jab ham input me kuch bhi type karte hai to ham DOM se direclty interact kar rahe hai to woh nahi hona chahiye balki ham chahate hai ki hamare aur dom ke bich me react interfare karna chahiye isliye yaha kaam ata hai two-way-binding
//jab bhi ham input me kuch likh rahe hai woh setUsername me jaa rahai hai and Username ki initial value empty thi agar future me hame input value ki sahayata se kuch khelga pada to ham Username ko access kr ke hamare actions perform kar sakte hai
