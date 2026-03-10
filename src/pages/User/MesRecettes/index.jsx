import Stat from '../../../components/Stat';
import UserNav from '../../../components/UserNav';

function MesRecettes() {
    return (
        <div className="h-screen flex flex-col">
            <div>
                <UserNav />
            </div>

            <div className="grow pt-4 bg-tsirotech-background">
                <div className="w-fit mx-auto space-y-4">
                    <Stat
                        icon={'fa-mortar-pestle'}
                        title={`Nombre total des recettes`}
                        content={10}
                    />
                    <Stat
                        icon={'fa-star'}
                        title={'Moyenne des notes réçues'}
                        content={`4.7 / 5`}
                    />
                </div>
            </div>
        </div>
    );
}

export default MesRecettes;
