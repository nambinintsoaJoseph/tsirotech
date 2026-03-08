import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../Logo';
import NavbarIndex from '../NavbarIndex';

function Header() {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className="lg:flex lg:justify-between">
            <div className="flex justify-between p-4">
                <Logo />

                {/* Hamburger Menu */}
                <div className="text-tsirotech-primary text-3xl mt-2 lg:hidden">
                    <button
                        onClick={() => {
                            setIsShow(!isShow);
                        }}
                    >
                        <i className={`fa fa-${isShow ? 'xmark' : 'bars'}`}></i>
                    </button>
                </div>
            </div>

            <div
                className={`${isShow ? 'flex' : 'hidden'} lg:flex justify-center lg:mt-4`}
            >
                <NavbarIndex />
            </div>

            <div
                className={`${isShow ? 'flex' : 'hidden'} lg:flex justify-center space-x-4 mt-2 lg:mt-4 lg:pr-2`}
            >
                <Link to="/login">
                    <Button text={'Se connecter'} icon={'fa-user'} />
                </Link>

                <Link to="/signup">
                    <Button text={"S'inscrire"} icon={'fa-user-plus'} />
                </Link>
            </div>
        </div>
    );
}

export default Header;
