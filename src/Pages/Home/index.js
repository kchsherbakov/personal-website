import H1 from "../../Components/H1";
import styled from "styled-components";
import A from "../../Components/A";

const ADecorationNone = styled.a`
    text-decoration: none;
`;

export default function Home() {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <H1>Konstantin Chsherbakov</H1>
                <ADecorationNone className={"text-gray-400"} href={"https://abr.kz"} target={"_blank"}>
                    Senior Software Engineer at abr+
                </ADecorationNone>
            </div>
            <div className="flex flex-col flex-w-fit gap-1">
                <A className="flex-w-fit" href="/experience">Experience</A>
                <A className="flex-w-fit" href="/education">Education</A>
                <A className="flex-w-fit" href="/About">About</A>
            </div>
            <div className="flex flex-col gap-1">
                <A className="flex-w-fit text-gray-400 transition hover-text-black" href="mailto://k.chsherbakov@outlook.com">Email</A>
                <A className="flex-w-fit text-gray-400 transition hover-text-black" href="https://t.me/kchsherbakov" target="_blank">Telegram</A>
                <A className="flex-w-fit text-gray-400 transition hover-text-black" href="https://www.linkedin.com/in/konstantin-chsherbakov-7b2ab5128/" target="_blank">
                    LinkedIn
                </A>
            </div>
        </div>
    );
}