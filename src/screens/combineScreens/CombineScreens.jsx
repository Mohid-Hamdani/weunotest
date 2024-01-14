import React from "react";
import Header from "../header/Header";
import { Carousel } from "antd";
import front1 from "../../assets/front1.png";
import front2 from "../../assets/front2.jpg";
import front3 from "../../assets/front3.jpg";
import styles from "./CombineScreens.module.css";
import TextComponent from "../../components/textComponent/TextComponent";
import SubmitButton from "../../components/submitButton/SubmitButton";
import { FaLongArrowAltRight } from "react-icons/fa";
import VideoScreen from "../videoScreen/VideoScreen";
import Tickets from "../tickets/Tickets";
import Restraunts from "../restraunts/Restraunts";
import Map from "../map/Map";
import Footer from "../footer/Footer";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "100px",
  textAlign: "center",
  background: "#364d79",
};
const CombineScreens = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.header}>
        <Header />
      </div>
      <Carousel className={styles.carousel} dots={true}>
        <div className={styles.carouselImg}>
          <img src={front1} />
        </div>
        <div className={styles.carouselImg}>
          <img src={front2} />
        </div>
        <div className={styles.carouselImg}>
          <img src={front3} />
        </div>
      </Carousel>
      <div className={styles.info}>
        <TextComponent className={styles.name} text={"KHAWAJA YANNI"} />
        <TextComponent
          className={styles.heading}
          text={"The new era of luxury"}
        />
        <TextComponent
          className={styles.desc}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        />
        <div className={styles.infoBtn}>
          <SubmitButton
            className={styles.btn}
            title={"Book reservation now"}
            rightIcon={<FaLongArrowAltRight size={20} />}
          />
        </div>
      </div>
      <div className={styles.midDiv}>
        <div className={styles.videoScreen}>
          <VideoScreen />
        </div>
        <div className={styles.tickets}>
          <Tickets />
        </div>
        <div className={styles.videoScreen }>
          <Restraunts/>
        </div>
        <div className={styles.videoScreen }>
          <Map/>
        </div>
        <div className={styles.footer }>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default CombineScreens;
