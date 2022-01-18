import styles from './Input.module.css'

function InputTime(props){

    return(
        <div className={styles.campos}>
            <label className={styles.labelTime} htmlFor={props.name}>{props.text}</label>
            <input className={styles.inputTime} type="time" id={props.name} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
        </div>     
    )
}

export default InputTime;