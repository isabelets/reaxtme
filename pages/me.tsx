import styles from "../styles/Me.module.scss";
import socials from "../assets/data/socials.json";
import Image from "next/image";

const Description = () => {
  return (
    <div className={styles["me"]}>
      <Image
        src="/img/eu-circle-border.webp"
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <h1>Isabele</h1>
      <ul>
        <li>Fullstack Developer</li>
        <li>Brazil, São Paulo</li>
      </ul>
    </div>
  );
};

const Interests = () => {
  return (
    <div className={styles["interests"]}>
      <ul>
        <li className={styles["interest"]}>
          <small>
            <span role="img" aria-label="pet">
              🐶Pets
            </span>
          </small>
        </li>
        <li className={styles["interest"]}>
          <span role="img" aria-label="food">
            🍕Food
          </span>
        </li>
        <li className={styles["interest"]}>
          <span role="img" aria-label="travelling">
            ✈️Travelling
          </span>
        </li>
        <li className={styles["interest"]}>
          <span role="img" aria-label="shows">
            📺Tv shows / animes
          </span>
        </li>
      </ul>
    </div>
  );
};

export const Socials = () => {
  let socialsRender = socials.map((social, key) => {
    return (
      <li className={styles["social"]} key={key}>
        <a href={social.link}>
          <img src={social.img} alt={social.alt} />
        </a>
      </li>
    );
  });

  return <ul className={styles["socials"]}>{socialsRender}</ul>;
};

export const Me = () => {
  return (
    <>
      <Description />
      <Interests />
    </>
  );
};
