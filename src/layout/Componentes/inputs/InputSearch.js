import styles from './Input.module.css'

function InputSearch(props){

    return(
        <div className={styles.campos}>
            <label className={styles.label} htmlFor={props.name}>{props.text}</label>
            <input className={styles.input} type="search" id={props.name} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value == null ? '': props.value}/>
        </div>     
    )
}

export default InputSearch;