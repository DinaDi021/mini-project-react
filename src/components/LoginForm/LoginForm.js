import styles from './LoginPage.module.css'
import {useState} from "react";


const LoginForm = () => {

    const [formValue, setFormValue] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(formValue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((response) => response.json())
            .then((value) => console.log(value))
            .catch(e => {
                console.log(e);
            })
    }

    const handleFormChange = (e, key) => {
        e.preventDefault();
        setFormValue((prevState)=>{
            return{
                ...prevState,
                [key]: e.target.value
            }
        })
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Name:
                    <br/>
                    <input type="text" value={formValue.name} onChange={(event) => handleFormChange(event,'name')}/>
                </label>
                <label>
                    Username:
                    <br/>
                    <input type="text" value={formValue.username} onChange={(event) => handleFormChange(event,'username')}/>
                </label>
                <label>
                    Email:
                    <br/>
                    <input type="text" value={formValue.email} onChange={(event) => handleFormChange(event,'email')}/>
                </label>
                <label>
                    Phone:
                    <br/>
                    <input type="number" value={formValue.phone} onChange={(event) => handleFormChange(event,'phone')}/>
                </label>

                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default LoginForm