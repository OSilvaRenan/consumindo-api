import styles from './Input.module.css'

function InputCheckbox(props){

    return(
        <div className={styles.campos}>
            <input className={styles.inputCheckbox} type="checkbox" id={props.name} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value == null ? '': props.value}/>
            <label className={styles.labelCheckbox} htmlFor={props.name}>{props.text}</label>
        </div>     
    )
}

export default InputCheckbox;