import styled from "styled-components";

const LogoWrapper = styled.div`
    margin-bottom: 2rem;
`;

export default function Logo() {
    return (
        <LogoWrapper>
            <a href="/">
                <img src="logo.svg" alt="Logo"/>
            </a>
        </LogoWrapper>
    );
}