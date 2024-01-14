import React from 'react';
import styles from './Footer.module.css';
import TextComponent from '../../components/textComponent/TextComponent';
import socialIcon1 from '../../assets/socialIcon1.png';
import socialIcon2 from '../../assets/socialIcon2.png';
import logo from '../../assets/logo.png';
import visa from '../../assets/visa.png';
import master from '../../assets/master.png';
import master2 from '../../assets/master2.png';
import { IoLogoTiktok } from 'react-icons/io5';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSnapchatGhost } from 'react-icons/fa';

const socialIcons = [
    {
      id: 1,
      icon: <IoLogoTiktok />,
    },
    {
      id: 2,
      icon: <PiInstagramLogoFill />,
    },
    {
      id: 1,
      icon: <FaXTwitter />,
    },
    {
      id: 1,
      icon: <FaSnapchatGhost />,
    },
  ];
const Footer = () =>{
    return (
        <div className={styles.mainDiv}>
            <div className={styles.header}>
                <div className={styles.H_left}>
                    <TextComponent text={"Join us for an unforgettable experience"}/>
                </div>
                <div className={styles.H_right}>
                <TextComponent text={"DOWNLOAD THE GROVES APP"}/>
                    <div className={styles.socialIcons}>
                        <img src={socialIcon1}/>
                        <img src={socialIcon2}/>
                    </div>
                </div>

            </div>
            <div className={styles.info}>
                <div className={styles.subInfo}>
                    <TextComponent className={styles.infoHeading} text={"LOCATION"}/>
                    <TextComponent className={styles.infoText} text={"Al-Hizam Park"}/>
                    <TextComponent className={styles.infoText} text={"Al-Semairi, Yanbu al bahar"}/>
                    <TextComponent className={styles.infoText} text={"Riyadh Saudia Arabia"}/>
                </div>
                <div className={styles.subInfo}>
                    <TextComponent className={styles.infoHeading} text={"WORKING HOURS"}/>
                    <TextComponent className={styles.infoText} text={"Sun until Thurs 4:00PM"}/>
                    <TextComponent className={styles.infoText} text={"Fri & Sat 2:30PM"}/>
                </div>
                <div className={styles.subInfo}>
                    <TextComponent className={styles.infoHeading} text={"GUEST SERVICE CALL"}/>
                    <TextComponent className={styles.infoText} text={"cc@thegroves-sa.com"}/>
                    <TextComponent className={styles.infoText} text={"9220001672"}/>
                </div>
            </div>
            <div className={styles.logoDiv}>
                <div className={styles.logo}>
                    <img src={logo}/>
                </div>
                <div className={styles.socialIconsDiv}>
                {socialIcons?.map((item, index) => {
                  return <div className={styles.icon}>{item.icon}</div>;
                })}
                </div>
            </div>
            <div className={styles.others}>
                <div className={styles.O_left}>
                <TextComponent className={styles.otherText} text={"Terms & Conditions"}/>
                <TextComponent className={styles.otherText} text={"Privacy Policy"}/>
                <TextComponent className={styles.otherText} text={"The Groves For Entertainment"}/>

                </div>
                <div className={styles.O_right}>
                    <img src={visa}/>
                    <img src={master}/>
                    <img src={master2}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;