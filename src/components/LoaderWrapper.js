import React from "react";
import {CircleLoader} from "react-spinners";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #1e7fc6;
  margin-top: 30px;
`;

const LoaderWrapper = () => {
    return (
        <div className="popup d-flex justify-content-center align-items-center">
            <div className="popup__container popup__padding col-12 col-md-8 col-l-6">
                <h2 className="popup__title __title-font">Just a sec...</h2>
                <p className="popup__text">I'm loading actual information about myself</p>
                <StyledContainer>
                    <CircleLoader loading={true} color={"#1e7fc6"} size={100}/>
                </StyledContainer>
            </div>
        </div>
    )
}

export default LoaderWrapper;