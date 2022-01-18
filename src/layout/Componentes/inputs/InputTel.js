import styles from './Input.module.css'

function InputTel(props){

    return(
        <div className={styles.campos}>
            <label className={styles.labelTel} htmlFor={props.name}>{props.text}</label>
            <input className={styles.inputTel} type="tel" id={props.name} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value} pattern={props.pattern}/>
        </div>     
    )
}

export default InputTel;