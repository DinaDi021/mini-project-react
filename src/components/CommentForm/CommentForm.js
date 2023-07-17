import styles from './CommentForm.module.css'
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import Joi from "joi";
import {CommentsServices} from "../../services/apiServices";


const CommentForm = () => {

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string()
            .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}).required(),
        body: Joi.string().required()
    });

    const {
        handleSubmit, register, reset, formState: {errors},
    } = useForm({
        resolver: joiResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            await CommentsServices.addComment();
            console.log(data);
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (<div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2>Add comment</h2>
                <label>
                    Name:
                    <br/>
                    <input type="text" {...register('name', {required: true})}/>
                    {errors.name && <span>{errors.name.message}</span>}
                </label>
                <label>
                    Email:
                    <br/>
                    <input type="text" {...register('email', {required: true})}/>
                    {errors.email && <span>{errors.email.message}</span>}
                </label>
                <label>
                    Body:
                    <br/>
                    <input type="text" {...register('body', {required: true})}/>
                    {errors.body && <span>{errors.body.message}</span>}
                </label>

                <button type='submit'>Send</button>
            </form>
        </div>)
}

export default CommentForm