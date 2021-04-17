import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {

    const [currentYear, setCurrentYear] = useState(-1);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    });

    return (
        <footer id="main-footer">
            Copyright &copy; {currentYear}
        </footer>
    );
};

export default Footer;