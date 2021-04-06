import React from 'react'

 const Login = () => {
    return (
        <div className="login">
            <form>
                <label for="firstname"><b>Firstname</b></label>
                <input type="text" placeholder="Enter Firstname" name="firstname" />

                <label for="surname"><b>Surname</b></label>
                <input type="text" placeholder="Enter Surname" name="surname" />
            </form>
        </div>
    )
}
export default Login