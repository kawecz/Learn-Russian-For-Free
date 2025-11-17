import styles from '../modules/Burger.module.css'
function Burger({ativo,setAtivo}) {

    const handleClick = () => {
        setAtivo(!ativo)
        alert("Btn clicado")
    }
    return(
        <>
            <div className={`${styles.burger} ${ativo ? 'active' : ''}`} onClick={handleClick}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>
        </>
    )
}

export default Burger