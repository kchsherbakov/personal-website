import React from "react";
import {useTranslation} from "react-i18next";
import {CircleLoader} from "react-spinners";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #1e7fc6;
  margin-top: 30px;
`;

const LoaderWrapper = () => {
    const {t} = useTranslation();

    return (
        <div className="popup d-flex justify-content-center align-items-center">
            <div className="popup__container popup__padding col-12 col-md-8 col-l-6">
                <h2 className="popup__title __title-font">{t('just_a_sec')}</h2>
                <p className="popup__text">{t('loading_data')}</p>
                <StyledContainer>
                    <CircleLoader loading={true} color={"#1e7fc6"} size={100}/>
                </StyledContainer>
            </div>
        </div>
    )
}

export default LoaderWrapper;