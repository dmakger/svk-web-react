import React, {useEffect} from 'react';

const Size = ({width, set}) => {
    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);
        set(mediaQuery.matches);

        const handleResize = (e) => {
            set(e.matches);
        };

        mediaQuery.addListener(handleResize);

        return () => {
            mediaQuery.removeListener(handleResize);
        };
    }, [width, set]);
    return (
        <></>
    );
};

export default Size;