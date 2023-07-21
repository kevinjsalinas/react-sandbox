import React from 'react'




function Profile() {

return (
    <>
			<form>
				<label for="fname">First Name: </label>
					<input type="text" id='fname' name='fname'></input><br></br>
					<label for="lname">Last Name: </label>
					<input type="text" id='lname' name='lname'></input><br></br>
					<label for="email">Email: </label>
					<input type="text" id='email' name='email'></input><br></br>
					<label for="password">Password: </label>
					<input type="password" id='password' name='password'></input><br></br>
					<label for="confirmpassword">Confirm Password: </label>
					<input type="password" id='confirmpassword' name='confirmpassword'></input><br></br>
			</form>
    </>
    
)


}

export default Profile;
