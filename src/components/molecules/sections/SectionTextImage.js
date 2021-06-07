import React from 'react'
import Title from '../../atoms/text/Title'
import Subtitle from '../../atoms/text/Subtitle'
import styles from './Section.module.css'

function SectionTextImage(props) {
    return (
        <div className={styles.textImage}>
            <Title text={props.title} />
            <Subtitle text={props.subtitle} />
            <img src={props.logo} alt="logoTI" />
        </div>
    )
}

export default SectionTextImage;