import React from 'react';
import Banner from '../../molecules/banners/Banner.js';
import Poster from '../../atoms/images/posters.png';

function Header() {
    return (
        <Banner
            button=
            "Comienza tu mes Premium"
            description=
            '* Términos y condiciones. La promoción: "Entrevista laboral presencial" se encuentra disponible únicamente en la ciudad de Lima, Perú. Entrevista por video llamada disponible en 195 países.'
            poster={ Poster }
        />
    )
};

export default Header;