import Button from "../Button";
import Logo from "../Logo";
import NavbarIndex from "../NavbarIndex";

function Header() {
    return (
        <header className="p-4 flex justify-between">

            <div>
                <Logo /> 
            </div>

            <div>
                <NavbarIndex />
            </div>

            <div className="space-x-2 mt-2">
                <Button text={`Se connecter`} /> 
                <Button text={`S'inscrire`} />
            </div>
        </header>
    )
}

export default Header;
