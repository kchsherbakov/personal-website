import A from "../../Components/A";
import H1 from "../../Components/H1";

export default function About() {
    return (
        <div className="flex flex-col gap-2">
            <H1>About</H1>
            <p className="text-gray-600">
                I am a backend software engineer, system architect and occasionally UI/UX designer currently building
                SAAS solution at <A href="https://abr.kz">abr+</A> for our B2B clients.
                <br/>
                <br/>
                I am driven by curiosity and strive for a high level of craftsmanship and excellence in my work.
            </p>
            <A className="text-gray-400 transition hover-text-black" href="mailto://k.chsherbakov@outlook.com">Connect</A>
        </div>
    );
}