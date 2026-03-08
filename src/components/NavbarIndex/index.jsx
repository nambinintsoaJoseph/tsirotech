function NavbarIndex() {
    const menu = [
        {
            name: 'Services',
            link: '#services',
        },
        {
            name: 'Menu disponibles',
            link: '#menu_dispo',
        },
        {
            name: 'Contact',
            link: '#contact',
        },
    ];

    return (
        <div>
            <ul className="flex space-x-16 mt-4 font-inter">
                {menu.map((menu_, index) => (
                    <li key={`menu-${index}`}>
                        <a href={menu_.link}>{menu_.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavbarIndex;
