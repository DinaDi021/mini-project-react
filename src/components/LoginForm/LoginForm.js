import styles from './LoginForm.module.css'
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import Joi from "joi";
import {UserServices} from "../../services/apiServices";


const LoginForm = () => {

    const schema = Joi.object({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string()
            .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}).required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        repeat_password: Joi.ref('password')
    });

    const {
        handleSubmit, register, reset, formState: {errors},
    } = useForm({
        resolver: joiResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            await UserServices.userRegistration();
            console.log(data);
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (<div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <br/>
                    <input type="text" {...register('name', {required: true})}/>
                    {errors.name && <span>{errors.name.message}</span>}
                </label>
                <label>
                    Surname:
                    <br/>
                    <input type="text" {...register('surname', {required: true})}/>
                    {errors.surname && <span>{errors.surname.message}</span>}
                </label>
                <label>
                    Phone:
                    <br/>
                    <input type="text" {...register('phone', {required: true})}/>
                    {errors.phone && <span>{errors.phone.message}</span>}
                </label>
                <label>
                    Email:
                    <br/>
                    <input type="text" {...register('email', {required: true})}/>
                    {errors.email && <span>{errors.email.message}</span>}
                </label>
                <label>
                    Password:
                    <br/>
                    <input type="password" {...register('password', {required: true})}/>
                    {errors.password && <span>{errors.password.message}</span>}
                </label>
                <label>
                    Repeat Password:
                    <br/>
                    <input type="password" {...register('repeat_password', {required: true})}/>
                    {errors.repeat_password && <span>{errors.repeat_password.message}</span>}
                </label>

                <button type='submit'>Send</button>
            </form>
        </div>)
}

export default LoginForm