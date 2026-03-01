import Header from '../../components/Header';
import commencez from '../../assets/img/commencez_img.jpg';
import cover from '../../assets/img/cover_creer_compte.jpg';
import Button from '../../components/Button';

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
        </div>
    );
}

export default Home;
