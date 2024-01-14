import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import TextComponent from "../../components/textComponent/TextComponent";
import { IoClose, IoLogoTiktok } from "react-icons/io5";
import { PiInstagramLogoFill, PiListBold } from "react-icons/pi";
import { FaAngleDown, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SubmitButton from "../../components/submitButton/SubmitButton";
import flag from "../../assets/flag.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Button, Drawer } from "antd";
import './Header.css';
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
const options = [
  {
    id: 1,
    title: "DINE WITH US",
  },
  {
    id: 2,
    title: "PLAN YOUR VISIT",
  },
  {
    id: 1,
    title: "EVENTS",
  },
  {
    id: 1,
    title: "VIEW GROVES MAP",
  },
  {
    id: 1,
    title: "OUR STORY",
  },
  {
    id: 1,
    title: "CONTACT US",
  },
];
const Header = () => {
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.mainDiv}>
      {width > 762 ? (
        <div className={styles.navBar}>
          <div className={styles.upperDiv}>
            <div className={styles.UD_left}>
              <img src={logo} />
            </div>
            <div className={styles.UD_right}>
              <div className={styles.icons}>
                {socialIcons?.map((item, index) => {
                  return <div className={styles.icon}>{item.icon}</div>;
                })}
              </div>
              <div className={styles.loginBtn}>
                <SubmitButton title={"Log in"} />
              </div>
              <div className={styles.languages}>
                <FaAngleDown color="white" />
                <img src={flag} />
                <TextComponent className={styles.options} text={"English"} />
              </div>
            </div>
          </div>
          <div className={styles.lowerDiv}>
            {options?.map((item, index) => {
              return (
                <TextComponent className={styles.options} text={item?.title} />
              );
            })}
          </div>
        </div>
      ) : (
        <>
        <div className={styles.header}>
          <div>
          <img src={logo} />

          </div>
          <div className={styles.menuIcon} onClick={showDrawer}>
          <PiListBold />
          </div>
        </div>
        <Drawer headerStyle={{display: "none"}} className={styles.menu} width={"100%"} onClose={onClose} open={open}>
        <div className={styles.menuheader}>
          <div>
          <img src={logo} />

          </div>
          <div className={styles.menuIcon} onClick={onClose}>
          <IoClose />
          </div>
        </div>
        <div className={styles.menuOptions}>
            {options.map((item, index)=>{
                return(
                    <TextComponent className={styles.menuItem} text={item?.title} />
                )
            })}
        </div>
        </Drawer>
           </>
      )}
    </div>
  );
};

export default Header;
