import styles from '../../modules/Footer.module.css'

function Footer() {
    const img_footer = "https://www.russianforfree.com/resources/share-newsletter.png"

    return (
    
         
        <footer>
            <div className={styles.div_footer}>
                <img src={img_footer} />
            </div>
            <h1>Learn Russian without spam</h1>
            <p>We want to help you learn Russian. Do you want to receive news from us? Subscribe to our newsletter. You will only receive one email a month with 100% news and 0% spam:</p>
        </footer>
    )
}

export default Footer