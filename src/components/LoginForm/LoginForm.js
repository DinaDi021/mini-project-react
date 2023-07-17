import styles from './LoginForm.module.css'
import {useState} from "react";
import {UserServices} from "../../services/apiServices";


const LoginForm = () => {

    const [formValue, setFormValue] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UserServices.postUsers(setFormValue);
        } catch (error) {
            console.log(error);
        }
    };

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