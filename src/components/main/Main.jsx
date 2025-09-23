import styles from "../../modules/Main.module.css";
import Button_styles from "../../modules/Main.module.css";

function Main() {
  //adding the image cards through urls

  const card1 =
    "https://www.russianforfree.com/resources/pics_icons/icon-russian-course.png";
  const card2 =
    "https://www.russianforfree.com/resources/pics_icons/icon-russian-texts-and-dialogues.png";
  const card3 =
    "https://www.russianforfree.com/resources/pics_icons/icon-russian-phrases.png";
  const card4 =
    "https://www.russianforfree.com/resources/pics_icons/icon-russian-exercises-vocabulary-and-grammar.png";
  const card5 =
    "https://www.russianforfree.com/resources/pics_icons/icon-more-russian.png";
  const card6 =
    "https://www.russianforfree.com/resources/pics_icons/icon-shop.png";
  const card7 =
    "https://www.russianforfree.com/resources/pics_icons/icon-contact.png";
  const card8 =
    "https://www.russianforfree.com/resources/pics_icons/icon-test.png";

  //end

  return (
    <>
      <h2>Our resources to learn Russian for free</h2>

      <main className={styles.resource}>
        <div className={styles.cards}>
          <img src={card1} alt="" className={styles.img} />
          <h3>Free Russian courses with audio</h3>
          <p>
            If you are a complete beginner, start from here. We have the best
            Russian courses
          </p>

          <button className={Button_styles.button}>List of Courses</button>
          <button className={Button_styles.button}>Course: How to read Russian</button>
          <button className={Button_styles.button}>Course: Basic Russian</button>
          <button className={Button_styles.button}>Course: Russian Cases</button>
        </div>
        <div className={styles.cards}>
          <img src={card2} alt="" className={styles.img} />
          <h3>Texts and dialogues with audio</h3>
          <p>
            Read and listen to texts in Russian with audio, graded by level and
            with English translations.
          </p>
          <button className={Button_styles.button}>Text with audio</button>
          <button className={Button_styles.button}>Dialogue with audio</button>
        </div>
        <div className={styles.cards}>
          <img src={card3} alt="" className={styles.img} />
          <h3>Texts and dialogues with audio</h3>
          <p>
            Read and listen to texts in Russian with audio, graded by level and
            with English translations.
          </p>
          <button className={Button_styles.button}>Russian for tourist</button>
          <button className={Button_styles.button}>Russian for parents</button>
          <button className={Button_styles.button}>Russian for lovers</button>
        </div>
        <div className={styles.cards}>
          <img src={card4} alt="" className={styles.img} />
          <h3>Texts and dialogues with audio</h3>
          <p>
            Read and listen to texts in Russian with audio, graded by level and
            with English translations.
          </p>
          <button className={Button_styles.button}>Russian for tourist</button>
          <button className={Button_styles.button}>Russian for parents</button>
          <button className={Button_styles.button}>Russian for lovers</button>
        </div>
        <div className={styles.cards}>
          <img src={card5} alt="" className={styles.img} />
          <h3>Texts and dialogues with audio</h3>
          <p>
            Read and listen to texts in Russian with audio, graded by level and
            with English translations.
          </p>
          <button className={Button_styles.button}>Russian for tourist</button>
          <button className={Button_styles.button}>Russian for parents</button>
          <button className={Button_styles.button}>Russian for lovers</button>
        </div>
        <div className={styles.cards}>
          <img src={card6} alt="" className={styles.img} />
          <h3>Texts and dialogues with audio</h3>
          <p>
            Read and listen to texts in Russian with audio, graded by level and
            with English translations.
          </p>
          <button className={Button_styles.button}>Russian for tourist</button>
          <button className={Button_styles.button}>Russian for parents</button>
          <button className={Button_styles.button}>Russian for lovers</button>
        </div>
        <div className={styles.cards}>
          <img src={card7} alt="" className={styles.img} />
          <h3>Texts and dialogues with audio</h3>
          <p>
            Read and listen to texts in Russian with audio, graded by level and
            with English translations.
          </p>
          <button className={Button_styles.button}>Russian for tourist</button>
          <button className={Button_styles.button}>Russian for parents</button>
          <button className={Button_styles.button}>Russian for lovers</button>
        </div>
        <div className={styles.cards}>
          <img src={card8} alt="" className={styles.img} />
          <h3>Texts and dialogues with audio</h3>
          <p>
            Read and listen to texts in Russian with audio, graded by level and
            with English translations.
          </p>
          <button className={Button_styles.button}>Russian for tourist</button>
          <button className={Button_styles.button}>Russian for parents</button>
          <button className={Button_styles.button}>Russian for lovers</button>
        </div>
      </main>
    </>
  );
}

export default Main;
