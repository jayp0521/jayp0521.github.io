import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import TextIconButton from '../styles/TextIconButton'

const NavBarSpace = styled.div`
    position: fixed;
    width: 98vw;
    display: flex;
    justify-content: flex-end;
    padding: 4vh 1vh 1vh 0;
    z-index: 999;
    backdrop-filter: blur(6px);
`

interface NavBarItems {
    to: string
    icon: IconDefinition
    description: string
    key: string
}

const navBarItems: NavBarItems[] = [
    { to: '/', icon: faHome, description: '. Home', key: 'intro' },
    {
        to: '/',
        icon: faUserCircle,
        description: '. About Me',
        key: 'about_me',
    },
    {
        to: '/',
        icon: faLaptopCode,
        description: '. Experience',
        key: 'experience',
    },
]

export default function NavBar() {
    return (
        <NavBarSpace>
            {navBarItems.map(item => {
                return (
                    <HashLink
                        to={item.to + '#' + item.key}
                        key={item.key}
                        smooth
                    >
                        <TextIconButton>
                            <FontAwesomeIcon icon={item.icon} className="fai" />
                            {item.description}
                        </TextIconButton>
                    </HashLink>
                )
            })}
        </NavBarSpace>
    )
}
