import skills from "../assets/data/skills.json";
import React from "react";
import Layout from "../components/Layout";
 import styles from "../styles/Skills.module.scss";
import Image from "next/image";

export default class Skills extends React.Component {
  rendeSkills = () => {
    return skills.map((skill, key) => {
      return (
        <div key={key} className={styles["skill"]}>
          <Image 
            src={skill.skill} 
            alt={skill.alt} 
            width={48}
            height={48}
            />
          <span>{skill.level}</span>
        </div>
      );
    });
  };

  render() {
    return (
      <Layout title="Skills">
        <div className={styles["container"]}>
          <div className={styles["skills-content"]}>{this.rendeSkills()}</div>
        </div>
      </Layout>

    );
  }
}
