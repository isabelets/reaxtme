import SimpleSlider from "../components/Slider";
import styles from "../styles/Experiences.module.scss";
import experiences from "../assets/data/background.json";
import Layout from "../components/Layout";

const xp = () => { };

const Experiences = () => {
  return (
    <Layout title="Experiences">
      <div className={styles["experiences"]}>
        <SimpleSlider>
          {experiences.map((xp, key) => {
            return (
              <div key={key}>
                <h3>{xp.position}</h3>
                <p>
                  <small>
                    {xp.where} | {xp.dateFrom} - {xp.dateTo}
                  </small>
                </p>
                <p>
                  <ul>
                    {xp.description.map((attr, key2) => {
                      return <li key={key2}>{attr}</li>;
                    })}
                  </ul>
                </p>
              </div>
            );
          })}
        </SimpleSlider>
      </div>
    </Layout >
  );
};

export default Experiences;