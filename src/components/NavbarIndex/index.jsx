function NavbarIndex() {

    const menu = ['Services', 'Menu disponibles', 'Contact'];

    return (
        <div>
            <ul className="flex space-x-16 mt-4">
                {menu.map((menu_, index) => (
                    <li key={`menu-${index}`}>
                        {menu_}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarIndex; 