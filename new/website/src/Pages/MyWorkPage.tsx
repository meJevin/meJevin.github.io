import React, { useEffect } from "react";

const MyWorkPage: React.FC = () => {

    useEffect(() => {
        document.title = "My Work";
    });

    return (
        <h1>
            My work page
        </h1>
    )
};

export default MyWorkPage;