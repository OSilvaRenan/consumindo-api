import styles from './Input.module.css'

function Input(props){

return(
    <div className={styles.campos}>
        <label className={styles.label} htmlFor={props.name}>{props.text}</label>
        <input className={styles.input} type={props.type} name={props.name} placeholder={props.placeholder} />
    </div>     
)
}

export default Input;