import React from "react";
import styles from "./Tickets.module.css";
import TextComponent from "../../components/textComponent/TextComponent";
import SubmitButton from "../../components/submitButton/SubmitButton";
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
const dummyImages = [
  {
    id: 1,
    image: img1,
    name: "Little Krazy",
  },
  {
    id: 2,
    image: img2,
    name: "Hawanim groves city",
  },
  {
    id: 3,
    image: img3,
    name: "Picnic market",
  },
  {
    id: 4,
    image: img4,
    name: "Lucawa",
  },
];
const Tickets = (props) => {
    
  return (
    <div className={styles.mainDiv}>
      <div className={styles.heading}>
        <TextComponent
          text={
            "Book General Access Tickets and enjoy the attractions for free"
          }
        />
      </div>
      <div className={styles.btnDiv}>
        <SubmitButton
          className={styles.btn}
          title={"Book general access ticket"}
          rightIcon={<FaLongArrowAltRight size={20} />}
        />
      </div>
      <div className={styles.images}>
        {dummyImages?.map((item, index) => {
          return (
          <div className={styles.listItem}>
            <img src={item?.image}/>
            <TextComponent className={styles.listName} text={item?.name}/>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tickets;
