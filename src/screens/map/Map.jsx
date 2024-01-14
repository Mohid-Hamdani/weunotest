import React from 'react';
import styles from './Map.module.css';
import mapImg from '../../assets/map.png';
import TextComponent from '../../components/textComponent/TextComponent';
import SubmitButton from '../../components/submitButton/SubmitButton';
import { FaLongArrowAltRight } from 'react-icons/fa';
const Map =()=> {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.map}>
                <img src={mapImg}/>
            </div>
            <div className={styles.content}>
                <TextComponent className={styles.text} text={"EXPERIENCE THE GROVES"}/>
                <TextComponent className={styles.heading} text={"Find your place"}/>
                <TextComponent className={styles.text} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
                <div className={styles.btnDiv}>
        <SubmitButton
          className={styles.btn}
          title={"Open the map"}
          rightIcon={<FaLongArrowAltRight size={20} />}
        />
      </div>
            </div>
        </div>
    );
}

export default Map;