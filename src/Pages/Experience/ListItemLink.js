import A from "../../Components/A";

const ListItemLink = ({title, url}) =>
    <A href={url} target="_blank">
        <img src="link-chain.svg" alt={title}/>
        <span>{title}</span>
    </A>

export default ListItemLink;