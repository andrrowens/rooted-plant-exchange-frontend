import React, {useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const SignUp = ({updateUser}) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        city: '',
        state: '',
        zipcode: ''
    })

    const [errors, setErrors] = useState([])
    const history = useHistory()
    const {users, setUsers} = useContext(UserContext)

    const {username, email, password, city, state, zipcode} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            email,
            password,
            city,
            state,
            zipcode
        }
       
        fetch("/signup", {
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.status === 201){
                res.json().then(user => {
                    setUsers(user)
                    history.push(`/users/${user.id}`)
                    alert("Successfully signed up")
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <> 
        <form className="signup-form" onSubmit={onSubmit}>
        <label>
          Username:
          </label>  
          <input className="user-auth" type='text' name='username' value={formData.username} onChange={handleChange} />
        < br />
        <label>
         Email:
         </label>
        <input className="user-auth" type='text' name='email' value={formData.email} onChange={handleChange} />
        < br />
        <label>
         Password:
         </label>
        <input className="user-auth" type='password' name='password' value={formData.password} onChange={handleChange} />
        < br />
        <label>
         City:
         </label>
        <input className="user-auth" type='text' name='city' value={formData.city} onChange={handleChange} />
        < br />
        <label>
         State:
         </label>
        <input className="user-auth" type='text' name='state' value={formData.state} onChange={handleChange} />
        < br />
        <label>
         Zip Code:
         </label>
        <input className="user-auth" type='text' name='zipcode' value={formData.zipcode} onChange={handleChange} />
        < br />
    
        <input className="auth-btn" type='submit' value='Sign Up Today!' />
        </form>
        {/* {errors?errors.map(e => <Errors>{e}</Errors>):null} */}
        </>
    )
}

export default SignUp