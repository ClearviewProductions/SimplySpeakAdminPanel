import React, { Fragment, useState } from 'react';
import {English,Spanish,Portuguese,French} from '../../../constant'
import { useTranslation } from "react-i18next";

const Language = () => {
    const { i18n } = useTranslation();
    const [selected,setSelected] = useState('en');
    
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
        setSelected(lng)
      };

    return (
        <Fragment>
            <div>
            <a className="txt-dark" href="#javascript">
                  <h6 className='text-uppercase'>{selected}</h6></a>
                <ul className="language-dropdown onhover-show-div p-20">
                    <li onClick={() => changeLanguage('en')}>
                        <a href="#javascript" data-lng="en">
                            <i className="flag-icon flag-icon-is"></i> {English}
                        </a>
                    </li>
                    <li onClick={() => changeLanguage('es')}>
                        <a href="#javascript" data-lng="es">
                            <i className="flag-icon flag-icon-um"></i> {Spanish}
                        </a>
                    </li>
                    <li onClick={() => changeLanguage('pt')}>
                        <a href="#javascript" data-lng="pt">
                            <i className="flag-icon flag-icon-uy"></i> {Portuguese}
                        </a>
                    </li>
                    <li onClick={() => changeLanguage('fr')}>
                        <a href="#javascript" data-lng="fr">
                            <i className="flag-icon flag-icon-nz"></i> {French}
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};


export default Language;