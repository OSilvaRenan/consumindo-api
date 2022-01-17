import styles from './Input.module.css'

function InputDate(props){

    return(
        <div className={styles.campos}>
            <label className={styles.label} htmlFor={props.name}>{props.text}</label>
            <input className={styles.input} type="date" id={props.name} name={props.name} onChange={props.onChange} value={props.value}/>
        </div>     
    )
}

export default InputDate;