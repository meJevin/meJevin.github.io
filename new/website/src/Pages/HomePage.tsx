import React, { useEffect } from "react";

const HomePage: React.FC = () => {

    useEffect(() => {
        document.title = "M. Naifield";
    });

    return (
        <h1>
            Home page
        </h1>
    )
};

export default HomePage;