import styles from "../../modules/Hero.module.css";

function Hero() {
  const url =
    "https://plus.unsplash.com/premium_vector-1724344997381-b14f9b5c1f39?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <hero className={styles.hero}>
      <div className={styles.firstDiv}>

        <div className={styles.firstHeading}>
          <h1 >Learn </h1>
        </div>
        <div className={styles.secondHeading}>
          <h1 > Russian</h1>
        </div>
        <div className={styles.thirdHeading}>
          <h1 >for free</h1>
          
        </div>

        <p>
          If you love the Russian language and you want to study it online, this
          is your place: <strong>free lessons</strong> from basic level to
          advanced, texts with audio, grammar, activities, and much more.
          Please, share this website with your friends
        </p>
      </div>
      <div className={styles.img}>
        <img src={url} />
      </div>
    </hero>
  );
}

export default Hero;
