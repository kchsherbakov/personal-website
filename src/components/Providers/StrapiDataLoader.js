import React from "react";
import {StrapiContext} from "./StrapiProvider";
import LoaderWrapper from "../LoaderWrapper";

export function StrapiDataLoader() {
    return (
        <StrapiContext.Consumer>
            {value => {
                if (!value.isLoading)
                    return;

                return (
                    <LoaderWrapper/>
                )
            }}
        </StrapiContext.Consumer>
    )
}