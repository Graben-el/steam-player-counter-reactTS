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
                    <FontAwesomeIcon icon={faSteam} />
                    <span>STEAM</span> Info
                </h1>
            </a>
            <SearchContainer>
                <input type='text' placeholder='Search game...'/>
                <FontAwesomeIcon icon={faSearch} className='search-icon'/>
            </SearchContainer>
            <a href='https://store.steampowered.com/' target='_blank' rel="noreferrer">
                <p>Visite a página oficial </p>
            </a>
        </Headers>
    );
}

