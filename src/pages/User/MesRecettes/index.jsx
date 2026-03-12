import Button from '../../../components/Button';
import RecetteCard from '../../../components/RecetteCard';
import Stat from '../../../components/Stat';
import UserNav from '../../../components/UserNav';
import mes_recettes from '../../../data/mes_recettes';

function MesRecettes() {
    return (
        <div className="h-screen flex flex-col">
            <div>
                <UserNav indexActiveMenu={1} />
            </div>

            <div className="grow pt-4 bg-tsirotech-background">
                <div className="grid grid-cols-1 justify-items-center gap-y-4 lg:grid-cols-2">
                    <div>
                        <Stat
                            icon={'fa-mortar-pestle'}
                            title={`Nombre total des recettes`}
                            content={10}
                        />
                    </div>

                    <div>
                        <Stat
                            icon={'fa-star'}
                            title={'Moyenne des notes réçues'}
                            content={`4.7 / 5`}
                        />
                        <div className="mt-4 grid justify-items-end">
                            <Button
                                text={'Créer une recette'}
                                icon={'fa-plus'}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mt-4">
                        <h3 className="font-outfit font-bold text-[24px] text-center md:text-[32px]">
                            Mes recettes
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-y-4 justify-items-center mt-4 lg:grid-cols-2">
                    {mes_recettes.map((recette, index) => (
                        <RecetteCard
                            key={`recette-${index}`}
                            type={recette.type}
                            difficulte={recette.difficulte}
                            titre={recette.titre}
                            date_publication={recette.date_publication}
                            temp_preparation={recette.temps_preparation}
                            description={recette.description}
                            photo_recette={recette.photo_recette}
                        />
                    ))}
                </div>

                <div className="my-4 grid justify-items-center">
                    <Button text="Afficher plus" icon="fa-chevron-down" />
                </div>
            </div>
        </div>
    );
}

export default MesRecettes;
