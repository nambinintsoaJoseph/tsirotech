/* 
    Static example for recipes page 
    It will no longer be used when the API is ready.
*/

import fondant_au_chocolat from '../assets/img/mes_repas/fondant_au_chocolat.jpg';
import ratatouille from '../assets/img/mes_repas/ratatouille.jpg';
import souffle_au_grand_marnier from '../assets/img/mes_repas/souffle_au_grand_marnier.jpg';
import ravitototo_sy_henakisoa from '../assets/img/mes_repas/ravitototo_sy_henakisoa.jpg';

const mes_recettes = [
    {
        titre: 'Fondant au chocolat',
        type: 'Dessert',
        difficulte: 'Facile',
        temps_preparation: '15 min',
        date_publication: '26 Fév 2026',
        description:
            "Un gâteau individuel ou à partager, caractérisé par une texture extérieure légèrement ferme et un centre intensément riche et liquide. C'est le contraste parfait entre le chaud et le fondant",
        photo_recette: fondant_au_chocolat,
    },
    {
        titre: 'Ratatouille',
        type: 'Plat principal',
        difficulte: 'Facile',
        temps_preparation: '30 min',
        date_publication: '26 Fév 2026',
        description:
            "Un ragoût traditionnel de légumes du Sud (aubergines, courgettes, poivrons, tomates) revenus séparément puis mijotés ensemble avec de l'ail, de l'oignon et des herbes de Provence.",
        photo_recette: ratatouille,
    },
    {
        titre: 'Souffle au grand marnier',
        type: 'Dessert',
        difficulte: 'Difficile',
        temps_preparation: '25 min',
        date_publication: '26 Fév 2026',
        description:
            "Un classique de la gastronomie française à base d'une crème pâtissière parfumée à la liqueur d'orange (Grand Marnier) et de blancs d'œufs montés en neige très ferme",
        photo_recette: souffle_au_grand_marnier,
    },
    {
        titre: 'Ravitoto sy henakisoa',
        type: 'Plat principal',
        difficulte: 'Moyenne',
        temps_preparation: '3h',
        date_publication: '26 Fév 2026',
        description:
            "Un ragoût traditionnel composé de feuilles de manioc pilées (ravitoto) et de morceaux de viande de porc grasse (henakisoa). Le secret réside dans la cuisson longue qui permet aux feuilles d'absorber le gras de la viande.",
        photo_recette: ravitototo_sy_henakisoa,
    },
];

export default mes_recettes;
