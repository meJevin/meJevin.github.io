import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, useLocation } from 'react-router-dom';

export interface MenuItem {
    title: string;
    linkTo: string;
}

interface Props {
    menuItems: MenuItem[];
}

const Header: React.FC<Props> = (props) => {
    
    let location = useLocation();

    let [currentHashRoute, setCurrentHashRoute] = useState("");

    currentHashRoute = document.location.hash.replace('#', '');

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const [menuButtonClass, setMenuButtonClass] = useState("menu-btn");
    const [menuNavClass, setMenuNavClass] = useState("menu-nav");
    const [menuClass, setMenuClass] = useState("menu");
    const [menuBrandingClass, setMenuBrandingClass] = useState("menu-branding");
    const [navItemClass, setNavItemClass] = useState("nav-item");

    const menuButtonClicked = () => {
        toggleMenu();;
    };

    const toggleMenu = () => {
        if (isMenuOpen) {
            // Hide it
            setIsMenuOpen(false);
            setMenuButtonClass("menu-btn close");
            setMenuNavClass("menu-nav show");
            setMenuClass("menu show");
            setMenuBrandingClass("menu-branding show");
            setNavItemClass("nav-item show");
        }
        else {
            // Show it
            setIsMenuOpen(true);
            setMenuButtonClass("menu-btn");
            setMenuNavClass("menu-nav");
            setMenuClass("menu");
            setMenuBrandingClass("menu-branding");
            setNavItemClass("nav-item");
        }
    };
    
    const handleMenuItemClick = (newRoute: string) => {
        setCurrentHashRoute(newRoute);
        toggleMenu();
    };

    return (
        <header>
            <div className={menuButtonClass} onClick={menuButtonClicked}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>

            <nav className={menuClass}>
                <div className={menuBrandingClass}>
                    <div className="portrait"></div>
                </div>

                <ul className={menuNavClass}>
                    {props.menuItems.map((menuItem) => {
                        let navClass = navItemClass;

                        if (currentHashRoute === menuItem.linkTo) {
                            navClass += " current";
                        }

                        return (
                            <li className={navClass} key={menuItem.title+"_"+menuItem.linkTo}>
                                <Link className="nav-link" to={menuItem.linkTo} 
                                        onClick={() => handleMenuItemClick(menuItem.linkTo)}>
                                    {menuItem.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>  
        </header>  
    );
}

export default Header;