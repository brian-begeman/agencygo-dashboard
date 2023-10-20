import { useState } from "react";

const ofusers = [{
  email : "cheyonlyfans@yahoo.com",
  password : "Congo212",
  creatorId : "cheyonlyfans"
},{
  email : "ankur4736@gmail.com",
  password : "Test@123",
  creatorId : "ankur"
}
]


function Main() {
  const [creator,setCreator] = useState({
    email :"",
    password: "",
    creatorId :""
  });

  function onclick() {    
    window.electron.ipcRenderer.sendMessage('attempt-login',  creator);
  }

  return (
    <div>
      <input id="email" value={creator.email} type="email"  />
      <input id="password" value={creator.password} type="password"  />

      <form>
        <label>
            <input type="radio" name="user" value="user1" onChange={() => {
              setCreator(ofusers[0])
            } } /> Creator Chey  
        </label>
        <br />

        <label>
            <input type="radio" name="user" value="user2" onChange={() => {
              setCreator(ofusers[1])
            } } /> Creator Ankur
        </label>
    </form>


      <button onClick={onclick} type="button">
        Auto Login 
      </button>
    </div>
  );
}

export default Main;
