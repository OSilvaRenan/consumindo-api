import styles from './Input.module.css'

function InputEmail(props){

    return(
        <div className={styles.campos}>
            <label className={styles.labelEmail} htmlFor={props.name}>{props.text}</label>
            <input className={styles.inputEmail} type="email" id={props.name} name={props.name} onChange={props.onChange} value={props.value}/>
        </div>     
    )
}

export default InputEmail;