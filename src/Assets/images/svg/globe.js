import React from 'react'
import styled from 'styled-components';
import LogoIcon from './LogoIcon';


const SvgIcon = styled(LogoIcon)`
  width: 22px;
  height: 22px;
`;

const Globe = () => {
    return (
        <SvgIcon viewBox="0 0 22 22" fill="none" >
            <path d="M21 11C21 13.6522 19.9464 16.1957 18.0711 18.0711C16.1957 19.9464 13.6522 21 11 21M21 11C21 8.34784 19.9464 5.8043 18.0711 3.92893C16.1957 2.05357 13.6522 1 11 1M21 11H1M11 21C8.34784 21 5.8043 19.9464 3.92893 18.0711C2.05357 16.1957 1 13.6522 1 11M11 21C12.8411 21 14.3333 16.5222 14.3333 11C14.3333 5.47778 12.8411 1 11 1M11 21C9.15889 21 7.66667 16.5222 7.66667 11C7.66667 5.47778 9.15889 1 11 1M1 11C1 8.34784 2.05357 5.8043 3.92893 3.92893C5.8043 2.05357 8.34784 1 11 1" stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
            </path>
        </SvgIcon>
    )
}

export default Globe