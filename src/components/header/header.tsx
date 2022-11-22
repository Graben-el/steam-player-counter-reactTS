import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Headers, SearchContainer } from '../../styles/header';


export const Header: React.FC = () => {
    return (
        <Headers>
            <a href='/'>
                <h1>
                    <FontAwesomeIcon icon={faSteam} /> Info
                </h1>
            </a>
            <a href='https://store.steampowered.com/' target='_blank' rel="noreferrer">
                <p>Visite a página oficial </p>
            </a>
        </Headers>
    );
}

