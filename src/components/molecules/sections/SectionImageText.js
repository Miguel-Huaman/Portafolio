import React from 'react'
import Title from '../../atoms/text/Title'
import Subtitle from '../../atoms/text/Subtitle'
import styles from './Section.module.css'

function SectionImageText(props) {
    return (
        <div className={styles.imageText}>
            <Title text={props.title} />
            <Subtitle text={props.subtitle} />
            <img src={props.logo} alt="logoIT" />;
        </div>
    )
}

export default SectionImageText;