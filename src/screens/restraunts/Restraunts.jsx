import React, { useRef } from 'react';
import styles from './Restraunts.module.css'
import TextComponent from '../../components/textComponent/TextComponent';
import img1 from '../../assets/r3.png';
import img2 from '../../assets/r1.png';
import img3 from '../../assets/r2.png';
import { List } from 'antd';
import { FaArrowRightLong } from 'react-icons/fa6';

const dummyData = [
    {
        id:1,
        image: img1,
        name: 'Vida Vera',
        guest: '100'
    },
    {
        id:2,
        image: img2,
        name: 'Zama Zulu',
        guest: '100'
    },
    {
        id:3,
        image: img3,
        name: 'Khawaja Yanni',
        guest: '100'
    },
    {
        id:4,
        image: img1,
        name: 'Yamagata',
        guest: '100'
    },
];
const renderItem = (item, index) =>{
    return(
<div className={styles.listItem}>
    <img src={item?.image}/>
    <div className={styles.listContent}>
        <div className={styles.LC_left}>
            <TextComponent text={item?.name} className={styles.listName}/>
            <div className={styles.guestDiv}>
                <TextComponent text={`${item?.guest} SR PER GUEST`}></TextComponent>
            </div>
        </div>
        <div className={styles.LC_right}>
        <FaArrowRightLong />
        </div>
    </div>
</div>
    )
}
const Restraunts = () => {

    return (
        <div className={styles.mainDiv}>
            <div className={styles.heading}>
            <TextComponent  text={"Experience the finest cuisine"}/>
            </div>
            <div className={styles.text} >
            <TextComponent text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
            </div>
            <List
            dataSource={dummyData}
            renderItem={renderItem}
            className={styles.list}
            grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 1,
                lg: 2,
                xl: 2,
                xxl: 2,
              }}
            />
        </div>
    );
}

export default Restraunts;