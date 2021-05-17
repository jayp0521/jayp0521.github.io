import styled from 'styled-components'
import { rootColors } from '../styles/globalStyles'
import { rgba } from 'polished'

const P = styled.p`
    color: ${rgba(rootColors.white, 1)};
`

const List = styled.ul`
    list-style: none;
    color: ${rgba(rootColors.white, 1)};

    li:before {
        content: '=> ';
        color: ${rgba(rootColors.codeColor, 1)};
    }
`

export default function AboutMe() {
    return (
        <>
            <P>
                Hello, my name is Jay Patel and I am working at Amazon as a
                Software Engineer.
                <br />
                <br />I have created a vast number of projects including web
                applications, REST APIs, and hybrid apps. I also have exploited
                vulnerable applications, cracked password hashes, and performed
                SQL injections.
                <br />
                <br />I also volunteer at the BAPS Organization where I am a
                national software engineer and regional administer. I have
                created applications to help with large scale events and provide
                analytical data.
            </P>
            <P>Technologies I am well-versed in:</P>
            <List>
                <li>Python</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Angular</li>
                <li>Metasploit</li>
                <li>Go</li>
            </List>
        </>
    )
}
