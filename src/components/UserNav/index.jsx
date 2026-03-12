import { useState } from 'react';
import user_nav from '../../data/user_nav';
import Logo from '../Logo';

function UserNav({ indexActiveMenu }) {
    const [isShow, setIsShow] = useState(false);

    return (
        <div>
            <div className="lg:flex">
                <div className="p-2 flex justify-between">
                    <div>
                        <Logo />
                    </div>

                    {/* Hamburger menu (mobile and tablet) */}
                    <div className="w-8 h-8 mt-1 mr-2 lg:hidden">
                        <div onClick={() => setIsShow(!isShow)}>
                            <i
                                className={`fa ${isShow ? 'fa-xmark' : 'fa-bars'}  text-[32px] text-tsirotech-primary`}
                            ></i>
                        </div>
                    </div>
                </div>

                {/* Menu content (mobile and tablet) */}
                <div className="pb-2 lg:hidden">
                    {isShow && (
                        <ul className="mt-2 w-fit mx-auto space-y-2">
                            {user_nav.map((nav, index) => (
                                <li
                                    key={`nav-${index}`}
                                    className={`${index == indexActiveMenu && 'underline'} font-inter`}
                                >
                                    <i
                                        className={`fa ${nav.icon} text-tsirotech-primary`}
                                    ></i>{' '}
                                    {nav.title}
                                </li>
                            ))}

                            {/* Disconnect link */}
                            <li>
                                <i className="fa fa-right-from-bracket text-tsirotech-primary"></i>{' '}
                                Déconnexion
                            </li>
                        </ul>
                    )}
                </div>

                {/* Menu content (Large screen) */}
                <div className="hidden lg:grow lg:flex lg:justify-between">
                    <div className="lg:grow">
                        <ul className="lg:flex lg:justify-center space-x-8">
                            {user_nav.map((nav, index) => (
                                <li key={`nav-laptop-${index}`}>
                                    <i
                                        className={`fa ${nav.icon} text-tsirotech-primary mt-6`}
                                    ></i>{' '}
                                    <span
                                        className={`${indexActiveMenu == index + 1 && 'border-b-2 border-tsirotech-primary pb-1'}`}
                                    >
                                        {nav.title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Disconnect link */}
                    <div className="mt-6 mr-4">
                        <a>
                            <i className="fa fa-right-from-bracket text-tsirotech-primary"></i>{' '}
                            Déconnexion
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserNav;
