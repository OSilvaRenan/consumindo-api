import styles from './Input.module.css'

function InputRadio(props){

    return(
        <div className={styles.campos}>
            <input className={styles.inputRadio} type="radio" id={props.name} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value == null ? '': props.value}/>
            <label className={styles.labelRadio} htmlFor={props.name}>{props.text}</label>
        </div>     
    )
}

export default InputRadio;