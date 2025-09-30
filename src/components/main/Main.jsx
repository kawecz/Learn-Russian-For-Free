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
  const img =
    "https://www.russianforfree.com/resources/art_banners_ads/banner_russian_sistema_kalinka_books_900x200.png";

  return (
    <>
      <div className={styles.div_main}>
        <h2>Our resources to learn Russian for free</h2>
      </div>

      <main className={styles.resource}>
        <div className={styles.cards}>
          <img src={card1} alt="" className={styles.img} />
          <h3>Free Russian courses with audio</h3>
          <p>
            If you are a complete beginner, start from here. We have the best
            Russian courses
          </p>

          <button className={Button_styles.button}>List of Courses</button>
          <button className={Button_styles.button}>
            Course: How to read Russian
          </button>
          <button className={Button_styles.button}>
            Course: Basic Russian
          </button>
          <button className={Button_styles.button}>
            Course: Russian Cases
          </button>
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
          <h3>Russian grammar and exercises</h3>
          <p>
            Learn and practice here: Videos, grammar tables and exercises with
            hundreds of questions.
          </p>
          <button className={Button_styles.button}>
            Videos: vocabulary + grammar
          </button>
          <button className={Button_styles.button}>Grammar tables</button>
          <button className={Button_styles.button}>Vocabulary Exercises</button>
          <button className={Button_styles.button}>Grammar Exercises</button>
        </div>
        <div className={styles.cards}>
          <img src={card5} alt="" className={styles.img} />
          <h3>More resources to learn Russian</h3>
          <p>
            We have put together all kinds of ideas to help you practice and
            improve your Russian.
          </p>
          <button className={Button_styles.button}>Russian Music</button>
          <button className={Button_styles.button}>Cartoons in Russian</button>
          <button className={Button_styles.button}>Comics in Russian</button>
          <button className={Button_styles.button}>Podcasts in Russian</button>
          <button className={Button_styles.button}>The Russian Alphabet</button>
          <button className={Button_styles.button}>
            {" "}
            Questions and Answers
          </button>
        </div>
        <div className={styles.cards}>
          <img src={card6} alt="" className={styles.img} />
          <h3>Shop: Russian courses and books</h3>
          <p>
            In addition to our free resources, we also sell the best books and
            courses for Russian learners.
          </p>
          <button className={Button_styles.button}>Shop</button>
        </div>
        <div className={styles.card7}>
          <img src={card7} alt="" className={styles.img} />
          <h3>Contact us / Report any error</h3>
          <p>
            Do you want to contact us? Do you want to report an error in our
            web? Please do it here.
          </p>
          <button className={Button_styles.button7}>Contact Us</button>
        </div>
        <div className={styles.card8}>
          <img src={card8} alt="" className={styles.img} />
          <h3>Free online Russian test</h3>
          <p>Check your level of Russian!</p>
          <button className={Button_styles.button8}>Online Test</button>
        </div>
      </main>
      <div className={styles.sectionInfo}>
        <div className={styles.sectionInfoDiv}>
          <h2>Why Learning Russian?</h2>
        </div>

        <p>
          Because it's the 5th most spoken language in the world by total number
          of speaker. If we take into account only native speakers (144 million
          native speakers in Russia, Belarus, Ukraine and other countries), it
          is the 8th in the world. All in all, Russian is more spoken than many
          other popular languages such as French, German or Japanese. Another
          reason to learn this language is because major sports events take
          place in Russia. Apart from that, the Russian Federation is the 6th
          largest economy in the world. There are many reasons, you only have to
          choose one!
        </p>
      </div>
      <div className={styles.sectionInfo}>
        <div className={styles.sectionInfoDiv2}>
          <h2>Where is Russian spoken?</h2>
        </div>

        <p>
          All around the world. It's a Slavic language spoken in Russia,
          Belarus, Ukraine, Kazakhstan, Kyrgyzstan and other ex-republics of the
          USSR. Also it's one of the only 6 official languages of the United
          Nations, and countries such as the United States or Germany are home
          to millions of Russian speakers. Why would you like to learn Russian?
          Are you travelling to Russia or Ukraine? Do you love learning
          languages? Whatever the reason, learn Russian with us. We have
          developed this website to help you learn this wonderful and powerful
          language. If you like our website, please share it.
        </p>
      </div>

      <div className={styles.books}>
        <img src={img} />
      </div>
    </>
  );
}

export default Main;
