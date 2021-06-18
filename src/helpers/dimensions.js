import React, {useState, useEffect} from 'react';

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export function withWindowDimensions(Component) {
    return function WrappedComponent(props) {
        const {width, height} = useWindowDimensions();
        return <Component {...props} windowWidth={width} windowHeight={height}/>;
    }
}