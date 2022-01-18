import styles from './Input.module.css'

function InputSearch(props){

    return(
        <div className={styles.campos}>
            <label className={styles.labelSearch} htmlFor={props.name}>{props.text}</label>
            <input className={styles.inputSearch} type="search" id={props.name} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value} aria-label={props.aria_label}/>
        </div>     
    )
}

export default InputSearch;