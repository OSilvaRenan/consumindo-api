import styles from './Input.module.css'

function InputRange(props){

    return(
        <div className={styles.campos}>
            <label className={styles.labelRange} htmlFor={props.name}>{props.text}</label>
            <input className={styles.inputRange} type="range" id={props.name} name={props.name} min={props.min} max={props.max} step={props.step} onChange={props.onChange} value={props.value}/>
        </div>     
    )
}

export default InputRange;