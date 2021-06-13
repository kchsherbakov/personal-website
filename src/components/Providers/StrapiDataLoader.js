import React from "react";
import {StrapiContext} from "./StrapiProvider";
import LoaderWrapper from "../LoaderWrapper";
import ErrorWrapper from "../ErrorWrapper";

export function StrapiDataLoader() {
    return (
        <StrapiContext.Consumer>
            {value => {
                if (value.isLoading) {
                    return (
                        <LoaderWrapper/>
                    )
                }

                if (value.errorLoading !== null) {
                    return (
                        <ErrorWrapper/>
                    )
                }
            }}
        </StrapiContext.Consumer>
    )
}