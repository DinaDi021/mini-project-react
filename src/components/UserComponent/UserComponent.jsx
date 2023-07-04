import styles from "./UserComponent.module.scss";

const UserComponent = (props) => {
    const { name, surname, age, info, imageSrc} = props
    return (
        <div className={styles.container}>
            <div className={styles.container__data}>
                <h2>{name}</h2>
                <h2>{surname},</h2>
                <h2>{age} years</h2>
            </div>
            <div className={styles.container__info}>
                <h6>{info}</h6>
                <img src={imageSrc} alt="User"/>
            </div>
        </div>
    )
}

export default UserComponent;