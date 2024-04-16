import H1 from "../../Components/H1";
import styled from "styled-components";
import A from "../../Components/A";
import Tag from "../../Components/Tag";
import ListItemPeriod from "./ListItemPeriod";
import ListItemTags from "./ListItemTags";
import ListItemLinks from "./ListItemLinks";
import ListItem from "./ListItem";
import List from "./List";
import ExperienceData from "./data";
import htmlParser from "html-react-parser";

const QuoteDivWrapper = styled.div`
    font-size: 14px;
    padding: 1.5rem 3rem;
    background-color: #F7F7F7;
`;

const ListItemWrapper = ({period, title, url, description, links, tags}) =>
    <ListItem>
        <ListItemPeriod>
            <p>{period}</p>
        </ListItemPeriod>
        <div className="flex flex-col gap-1">
            <A href={url} target="_blank">{title}</A>
            <p className="text-gray-600">
                {htmlParser(description)}
            </p>
            <ListItemLinks>
                {
                    links.map(item => {
                        return (<ListItemLink {...item}/>)
                    })
                }
            </ListItemLinks>
            <ListItemTags>
                {
                    tags.map(tag => {
                        return (<Tag name={tag}/>)
                    })
                }
            </ListItemTags>
        </div>
    </ListItem>;

const ListItemLink = ({title, url}) =>
    <A href={url} target="_blank">
        <img src="link-chain.svg" alt={title}/>
        <span>{title}</span>
    </A>

export default function Experience() {
    return (
        <div className="flex flex-col gap-2">
            <H1>Experience</H1>
            <QuoteDivWrapper className="text-gray-600">
                When you’re a carpenter making a beautiful chest of drawers, you’re not going to use a piece of plywood
                on the back, even though it faces the wall and nobody will ever see it. You’ll know it’s there, so
                you’re going to use a beautiful piece of wood on the back. For you to sleep well at night, the
                aesthetic, the quality, has to be carried all the way through.
                <br/>
                <br/>
                -Steve Jobs
            </QuoteDivWrapper>
            <List>
                {
                    ExperienceData.map(xp => {
                        return (<ListItemWrapper {...xp}/>)
                    })
                }
            </List>

        </div>
    );

}