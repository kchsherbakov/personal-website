import H1 from "../../Components/H1";
import styled from "styled-components";
import List from "./List";
import ExperienceData from "./data";
import ListItem from "./ListItem";

const QuoteFull = styled.div`
    display: none;
    font-size: 14px;
    padding: 1.5rem 3rem;
    background-color: #F7F7F7;
    max-width: inherit;

    @media (min-width: 768px) {
        display: flex;
    }
`;
const QuoteShort = styled.div`
    display: flex;
    font-style: italic;
    text-decoration: 2px underline solid #f3f4f6;
    text-underline-offset: 2px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export default function Experience() {
    return (
        <div className="flex flex-col gap-2">
            <H1>Experience</H1>
            <QuoteFull className="text-gray-600">
                When you’re a carpenter making a beautiful chest of drawers, you’re not going to use a piece of plywood
                on the back, even though it faces the wall and nobody will ever see it. You’ll know it’s there, so
                you’re going to use a beautiful piece of wood on the back. For you to sleep well at night, the
                aesthetic, the quality, has to be carried all the way through.
                <br/>
                <br/>
                -Steve Jobs
            </QuoteFull>
            <QuoteShort className="text-gray-400">
                ...the quality has to carried all the way through.
            </QuoteShort>
            <List>
                {
                    ExperienceData.map((xp, index) => {
                        return (<ListItem key={index} {...xp}/>)
                    })
                }
            </List>
        </div>
    );

}