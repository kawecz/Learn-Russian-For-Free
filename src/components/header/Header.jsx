import Button_styles from "../../modules/Button.module.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button className={Button_styles.act}>Home</button>
          </li>
          <li>
            <button className={Button_styles.button}>Free Russian Courses</button>
          </li>
          <li>
            <button className={Button_styles.button}> Phrasebooks</button>
          </li>
          <li>
            <button className={Button_styles.button}>Texts & Dialogue</button>
          </li>
          <li>
            <button className={Button_styles.button}>Exercices & Vocabulary & Grammar</button>
          </li>
          <li>
            <button className={Button_styles.button}>More Resources</button>
          </li>
          <li>
            <button className={Button_styles.button}>Contact Us</button>
          </li>
          <li>
            <button className={Button_styles.act}>
              Shop: Books & Courses
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
