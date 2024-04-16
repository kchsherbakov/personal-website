import styled from "styled-components";
import ListItemPeriod from "./ListItemPeriod";
import A from "../../Components/A";
import htmlParser from "html-react-parser";
import ListItemLinks from "./ListItemLinks";
import ListItemTags from "./ListItemTags";
import Tag from "../../Components/Tag";
import ListItemLink from "./ListItemLink";


const ListItemWrapper = styled.div`
    display: block;
    
    @media (min-width: 1200px) {
        position: relative;
    }
`;

const ListItem = ({period, title, url, description, links, tags}) => (
        <ListItemWrapper>
            <ListItemPeriod className="text-gray-600">{period}</ListItemPeriod>
            <div className="flex flex-col gap-1">
                <A href={url} target="_blank">{title}</A>
                <p className="text-gray-600">
                    {htmlParser(description)}
                </p>
                <ListItemLinks>
                    {
                        links.map(item => {
                            return (<ListItemLink key={item.title} {...item}/>)
                        })
                    }
                </ListItemLinks>
                <ListItemTags>
                    {
                        tags.map(tag => {
                            return (<Tag key={tag} name={tag}/>)
                        })
                    }
                </ListItemTags>
            </div>
        </ListItemWrapper>
    )
;

export default ListItem;
