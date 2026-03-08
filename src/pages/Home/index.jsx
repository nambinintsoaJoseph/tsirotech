import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import commencez from '../../assets/img/commencez_img.jpg';
import cover from '../../assets/img/cover_creer_compte.jpg';
import Button from '../../components/Button';
import services from '../../data/services';
import Service from '../../components/Service';
import menu_disponible from '../../data/menu_disponible';
import Logo from '../../components/Logo';

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
                            <Link to="/login">
                                <Button text={'Commencer'} icon={'fa-play'} />
                            </Link>
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
                        <Link to="/signup">
                            <Button
                                text={'Créer un compte'}
                                icon={'fa-user-plus'}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div id="services">
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
            <div className="mt-4" id="menu_dispo">
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

            {/* Contactez-nous */}
            <div className="mt-4 w-[345px] mx-auto md:w-[600px]" id="contact">
                <div>
                    <h3 className="text-center mt-2 p-4 font-outfit font-bold text-2xl lg:text-[32px]">
                        Conctactez-nous
                    </h3>
                </div>

                <div>
                    <p className="font-inter text-sm text-center px-2 lg:text-base my-4">
                        Une question, une suggestion ou un besoin d'assistance ?
                        N'hésitez pas à nous contacter, notre équipe vous
                        répondra dans le plus brefs délais.
                    </p>
                </div>

                <div>
                    <form className="mt-8">
                        <div className="flex flex-col">
                            <label htmlFor="adresseEmail">
                                Adresse email :
                            </label>
                            <input
                                type="text"
                                id="adresseEmail"
                                className="p-2 border rounded-lg border-tsirotech-border outline-none mt-2"
                            />
                        </div>

                        <div className="mt-4 flex flex-col">
                            <label htmlFor="message">Message : </label>
                            <textarea
                                name="message"
                                id="message"
                                className="border border-tsirotech-border rounded-lg h-[152px] resize-none outline-none p-2 mt-2"
                            ></textarea>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <Button text={'Envoyer'} icon={'fa-paper-plane'} />
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-4 bg-tsirotech-footer grid grid-row-3 grid-cols-2 md:grid-rows-[1fr,60px] md:grid-cols-3">
                <div className="col-span-2 mx-auto my-4 md:col-span-1 md:mt-16">
                    <div className="bg-white w-fit">
                        <Logo />
                    </div>
                </div>

                <div className="col-span-2 flex justify-between px-6 py-2 md:col-span-2 md:justify-around md:pt-8">
                    <div className="text-white">
                        <div>
                            <h3 className="font-outfit font-bold text-[20px]">
                                Navigations
                            </h3>
                        </div>

                        <div className="space-y-2">
                            <p className="pt-2">
                                <a href="#services">Services</a>
                            </p>
                            <p>
                                <a href="#menu_dispo">Menu disponibles</a>
                            </p>
                            <p>
                                <a href="#contact">Contact</a>
                            </p>
                        </div>
                    </div>

                    <div className="text-white space-y-2">
                        <div>
                            <h3 className="font-outfit font-bold text-[20px]">
                                Action
                            </h3>
                        </div>

                        <div className="space-y-2">
                            <p>
                                <Link to="/login">Se connecter</Link>
                            </p>
                            <p>
                                <Link to="/signup">S'inscrire</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 p-4 text-white md:col-span-3 md:h-fit md:pt-4">
                    <p className="text-center">
                        Tous droit réservés - TsiroTech
                        {new Date().getUTCFullYear()}
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
