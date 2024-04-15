import H1 from "../Components/H1";
import styled from "styled-components";
import A from "../Components/A";

const ADecorationNone = styled.a`
    text-decoration: none;
`;

const FlexDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

export default function Home() {
    return (
        <FlexDiv className="gap-3">
            <div>
                <H1>Konstantin Chsherbakov</H1>
                <ADecorationNone className={"text-gray-400"} href={"https://abr.kz"} target={"_blank"}>
                    Senior Software Engineer at abr+
                </ADecorationNone>
            </div>
            <FlexDiv className="gap-1">
                <A href="/experience">Experience</A>
                <A href="/education">Education</A>
                <A href="/about">About</A>
            </FlexDiv>
            <FlexDiv className="gap-1">
                <A className="text-gray-400" href="mailto://k.chsherbakov@outlook.com">Email</A>
                <A className="text-gray-400" href="https://t.me/kchsherbakov">Telegram</A>
                <A className="text-gray-400" href="https://www.linkedin.com/in/konstantin-chsherbakov-7b2ab5128/">
                    LinkedIn
                </A>
            </FlexDiv>
        </FlexDiv>
    );
}