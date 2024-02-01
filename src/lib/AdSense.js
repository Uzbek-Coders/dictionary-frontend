import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const AdsComponent = (props) => {

    const  currentPath  = useLocation()
    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    }, [currentPath])


    return (
        <div key={currentPath.pathname}>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-8555908314454713"
                data-ad-slot="6110794033"
                data-ad-format={"auto"}
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default AdsComponent;