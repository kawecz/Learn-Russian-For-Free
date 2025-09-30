import { useState } from 'react'
import styles from '../../modules/Footer.module.css'

function Footer() {
    const img_footer = "https://www.russianforfree.com/resources/share-newsletter.png"

    const [formData, setFormData] = useState({email:"", password: ""})

    function Form_script(e) {
        e.preventDefault()
        alert("Sent!")
        console.log(formData)
    }

    

    return (
        <>
        
         <img src={img_footer} className={styles.img} />

        <footer>

            <h1>Learn Russian without spam</h1>
            <p>We want to help you learn Russian. Do you want to receive news from us? Subscribe to our newsletter. You will only receive one email a month with 100% news and 0% spam:</p>

            <form onSubmit={Form_script}>

                <input value={FormData.email} type="email" required  onChange={(e)=> setFormData({...formData,email:e.target.value})}/>

                <input value={formData.password} type="password" required onChange={(e)=> setFormData({...formData,password:e.target.value})} />

                <input type="submit" value="Submit" />
                
            </form>
        </footer>
        </>
    )
}

export default Footer