import Profile from "./Profile";
import { useState } from 'react'

function App() {

  const [toggle, setToggle] = useState(false)



  return (

    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Edit profile</button>

      { toggle 
        ? 
        <>
          <Profile /> 
      		<button onClick={() => setToggle(!toggle)}>Save</button>
        </> 
        : 
        "" 
      }
    
    </div>
  );
}

export default App;
