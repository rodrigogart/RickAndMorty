import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const handeInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData,[property]: value})
        validation({...userData, [property]:value}, errors, setErrors)
    }
    
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
             <label htmlFor='username'>Username:</label>
             <input type='text' name='username' value={userData.username} onChange={handeInputChange}/>
             <p>{errors.username}</p>
             </div>
             <div>
             <label htmlFor='password'>Password:</label>
             <input type='text' name='password' value={userData.password} onChange={handeInputChange} />
             <p>{errors.password}</p>
             </div>
             <button>LOGIN</button>
        </form>
    )
}

export default Form ; 