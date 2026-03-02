import entree from '../assets/img/entree.jpg';
import plat_principaux from '../assets/img/plat_principaux.png';
import dessert from '../assets/img/dessert.jpg';
import boissons from '../assets/img/boissons.webp';
import recettes_rapides from '../assets/img/recettes_rapides.jpg';
import recettes_vegetariennes from '../assets/img/recettes_vegetariennes.jpg';

const menu_disponible = [
    {
        img: entree,
        title: 'Entrée',
    },
    {
        img: plat_principaux,
        title: 'Plat principaux',
    },
    {
        img: dessert,
        title: 'Dessert',
    },
    {
        img: boissons,
        title: 'Boissons',
    },
    {
        img: recettes_rapides,
        title: 'Recettes rapide',
    },
    {
        img: recettes_vegetariennes,
        title: 'Recettes végétariennes',
    },
];

export default menu_disponible;
