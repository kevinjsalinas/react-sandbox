import Profile from "./Profile";
import profile_icon from "../assets/profile_icon.jpg"
import { useState } from 'react'

function App() {

  const [toggle, setToggle] = useState(false)

  return (

    <div className="App">

      <div>
        <img alt="profile" image src={profile_icon}/>
      </div>

      <button onClick={() => setToggle(!toggle)}>Edit profile</button>

      { toggle 
        ? 
        <div>
          <Profile /> 
      		<button onClick={() => setToggle(!toggle)}>Save</button>
        </div> 
        : 
        "" 
      }
    
    </div>
  );
}

export default App;
