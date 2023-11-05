import React from 'react';
import {cls} from "../../../service/cls";

const IframeVideo = ({src, className, ...props}) => {
    return (
        <iframe
            src={src}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className={className} {...props}
        />
    );
};

export default IframeVideo;