import React from 'react';
import styles from './VideoScreen.module.css';
import TextComponent from '../../components/textComponent/TextComponent';
import { FaArrowRightLong } from 'react-icons/fa6';
import useWindowDimensions from '../../hooks/useWindowDimensions';
const VideoScreen = () => {
  const { height, width } = useWindowDimensions();

    return (
        <div className={styles.mainDiv}>
            <div className={styles.heading}>
            <TextComponent  text={"Mall Of: Endless Possibilities"}/>
            </div>
            <div className={styles.text} >
            <TextComponent text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
            </div>
            <div className={styles.videoDiv}>
            <iframe className={styles.video} width={ "800px" } height={ width > 576 ? "500px" : "200px"} src={require('../../assets/sample.mp4')} ></iframe>
            </div>
            <div className={styles.bottomDiv}>
                <TextComponent text={"25 SR/GUEST"}/>
                <div className={styles.BD_header}>
                <TextComponent className={styles.heading2} text={"Get your General Access Ticket"}/>
                <FaArrowRightLong className={styles.arrowIcon} />
                
                </div>
            <TextComponent text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>

            </div>
        </div>
    );
}

export default VideoScreen;