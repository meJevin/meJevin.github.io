import React, { useEffect, useState } from "react";

const HomePage: React.FC = () => {

    const [isShowingContacts, setIsShowingContacts] = useState(false);

    const [contactsClass, setContactsClass] = useState("contacts");
    const [contactsButtonClass, setContactsButtonClass] = useState("contact-info-button");
    const [contactsIconClass, setContactsIconClass] = useState("fa fa-chevron-right");

    useEffect(() => {
        document.title = "M. Naifield";
    });

    const handleContactsClick = () => {
        if (isShowingContacts) {
            setContactsClass("contacts");
            setContactsButtonClass("contact-info-button");
            setContactsIconClass("fa fa-chevron-right");
            setIsShowingContacts(false);
        }
        else {
            setContactsClass("contacts show");
            setContactsButtonClass("contact-info-button show");
            setContactsIconClass("fa fa-chevron-right show");
            setIsShowingContacts(true);
        }
    };

    return (
        <main id="home">
            <h1 className="lg-heading">
                Michael&nbsp;
                <span className="text-secondary">Naifield</span>
            </h1>

            <h2 className="sm-heading">
                Software Developer for Windows, Android & iOS
            </h2>

            <div className="icons">
                <a href="https://github.com/meJevin">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://telegram.me/sssskeo">
                    <i className="fab fa-telegram fa-2x"></i>
                </a>
                <a href="https://vk.com/sssskeo">
                    <i className="fab fa-vk fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/sssskeo">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
            </div>

            <div className="contact-info">
                <div className={contactsButtonClass} onClick={handleContactsClick}>
                    <h2>
                        Contact
                    </h2>
                    <i className={contactsIconClass}></i>
                </div>

                <div className={contactsClass}>
                    <div>
                        <i className="fas fa-phone-alt"></i>
                        <a href="tel:7-926-636-58-74">+7 (926) 636-58-74</a>
                    </div>
                    <div>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:mejevin@gmail.com">mejevin@gmail.com</a>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default HomePage;