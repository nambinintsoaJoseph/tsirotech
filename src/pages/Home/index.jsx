import Header from '../../components/Header';
import commencez from '../../assets/img/commencez_img.jpg';
import cover from '../../assets/img/cover_creer_compte.jpg';
import Button from '../../components/Button';
import services from '../../data/services';
import Service from '../../components/Service';
import menu_disponible from '../../data/menu_disponible';

function Home() {
    return (
        <div>
            <Header />

            {/* Commencer votre expérience culinaire */}
            <div className="p-4 bg-tsirotech-background">
                <div className="mt-4 lg:flex lg:justify-between">
                    <div>
                        <img
                            src={commencez}
                            alt=""
                            className="rounded-2xl mx-auto"
                        />
                    </div>

                    <div className="lg:h-fit lg:self-center">
                        <div>
                            <h3 className="text-center p-4 font-outfit font-bold text-2xl lg:text-[32px]">
                                Commencez votre expérience culinaire
                            </h3>
                        </div>

                        <div>
                            <p className="font-inter text-sm text-center px-2 lg:text-base">
                                Connectez vous pour accéder à des recettes
                                expérimentales et à participer à l'innovation
                                culinaire
                            </p>
                        </div>

                        <div className="flex justify-center mt-4">
                            <Button text={'Commencer'} icon={'fa-play'} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Créer votre compte dès maintenant */}
            <div
                style={{
                    backgroundImage: `url(${cover})`,
                    backgroundSize: 'cover',
                }}
                className="text-white h-[276px] sm:h-[300px] lg:h-[476px] flex justify-center items-center"
            >
                <div className="">
                    <div>
                        <h3 className="text-center p-4 font-outfit font-bold text-2xl lg:text-[32px]">
                            Créer votre compte dès maintenant
                        </h3>
                    </div>

                    <div>
                        <p className="font-inter text-sm text-center px-2 lg:text-base">
                            Inscrivez-vous pour accéder à toutes les
                            fonctionnalités de TisorTech et rejoindre la
                            communauté.
                        </p>
                    </div>

                    <div className="flex justify-center mt-4">
                        <Button
                            text={'Créer un compte'}
                            icon={'fa-user-plus'}
                        />
                    </div>
                </div>
            </div>

            {/* Services */}
            <div>
                <div>
                    <h3 className="text-center p-4 font-outfit font-bold text-2xl lg:text-[32px]">
                        Services
                    </h3>

                    <p className="font-inter text-sm text-center px-2 lg:text-base">
                        Explorer une large collection de recettes innovantes
                        proposées par la communauté et trouvez de nouvelles
                        idées culinaire à tester.
                    </p>
                </div>

                <div className="grid grid-rows-3 justify-items-center gap-y-11 mt-8 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1">
                    {services.map((service, index) => (
                        <Service
                            key={`service-tsirotech-${index}`}
                            title={service.title}
                            cover={service.cover}
                            icon={service.icon}
                            content={service.content}
                        />
                    ))}
                </div>
            </div>

            {/* Menu disponible */}
            <div className="mt-4">
                <div>
                    <h3 className="text-center p-4 font-outfit font-bold text-2xl lg:text-[32px]">
                        Menu disponible
                    </h3>

                    <p className="font-inter text-sm text-center px-2 lg:text-base mt-4">
                        Découvrez les différents catégories de recettes
                        disponible sur TsiroTech et trouvez facilement le type
                        de plat qui correspond à vos envies.
                    </p>
                </div>

                <div className="mt-8 grid justify-items-center md:grid-cols-2 2xl:grid-cols-3">
                    {menu_disponible.map((menu, index) => (
                        <div
                            key={`menuDispo-${index}`}
                            className="w-[350px] mt-4"
                        >
                            <div>
                                <img
                                    src={menu.img}
                                    alt={`TsiroTech - Menu disponible : ${menu.title}`}
                                    className="w-[350px] h-[250px] rounded-2xl"
                                />
                            </div>
                            <div>
                                <h3 className="font-outfit font-bold text-[20px] text-center my-4">
                                    {' '}
                                    {menu.title}{' '}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
