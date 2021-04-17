import React, { useEffect } from "react";

const AboutPage: React.FC = () => {

    useEffect(() => {
        document.title = "About me";
    });

    return (
        <h1>
            About page
        </h1>
    )
};

export default AboutPage;