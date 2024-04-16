import styled from "styled-components";

const TagWrapper = styled.div`
    border-radius: 9999px;
    background-color: #F3F4F6;
    padding: .2rem 1rem;
`;

export default function Tag({name}) {
    return (
        <TagWrapper>
            {name}
        </TagWrapper>
    );
}