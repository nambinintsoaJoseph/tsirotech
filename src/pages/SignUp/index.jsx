import AuthHero from '../../components/AuthHero';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import chef_bro from '../../assets/img/signup/chef_bro.svg';
import google from '../../assets/img/login/google.svg';

function SignUp() {
    return (
        <div className="h-screen flex flex-col">
            <header className="flex justify-between p-4">
                <div>
                    <Logo />
                </div>

                <div>
                    <Button text={'Se connecter'} icon={'fa-user'} />
                </div>
            </header>

            <div className="grow bg-tsirotech-background  p-2 xl:flex xl:justify-between">
                <div className="mt-16 hidden xl:block xl:ml-20">
                    <AuthHero
                        img={chef_bro}
                        title="Commencer votre"
                        subtitle="aventure culinaire !"
                        text="Créez votre compte pour publier vos recettes expérimentales, 
                        découvrir des créations uniques et partager vos impression avec la communauté"
                    />
                </div>

                <div className="mt-[64px] md:w-[486px] md:mx-auto xl:mx-0 xl:mt-16 xl:mr-20">
                    <div>
                        <h3 className="font-outfit font-semibold text-[24px] text-center md:text-[32px]">
                            Créez votre compte !
                        </h3>
                    </div>

                    <div>
                        <form className="mt-[32px] space-y-4 p-4">
                            <div className="flex flex-col space-y-[8px]">
                                <label htmlFor="nom">Nom</label>
                                <input
                                    type="text"
                                    name="nom"
                                    id="nom"
                                    className="bg-tsirotech-background p-2 border border-tsirotech-border rounded-lg outline-none h-[48px]"
                                />
                            </div>

                            <div className="flex flex-col space-y-[8px]">
                                <label htmlFor="prenom">Prénom(s)</label>
                                <input
                                    type="text"
                                    name="prenom"
                                    id="prenom"
                                    className="bg-tsirotech-background p-2 border border-tsirotech-border rounded-lg outline-none h-[48px]"
                                />
                            </div>

                            <div className="flex flex-col space-y-[8px]">
                                <label htmlFor="email">Adresse email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="bg-tsirotech-background p-2 border border-tsirotech-border rounded-lg outline-none h-[48px]"
                                />
                            </div>

                            <div className="flex flex-col space-y-[8px] mt-[16px]">
                                <label htmlFor="password">Mot de passe</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-tsirotech-background p-2 border border-tsirotech-border rounded-lg outline-none h-[48px]"
                                />
                            </div>

                            <div>
                                <button className="bg-tsirotech-primary h-[48px] text-center w-full rounded-lg text-white mt-4">
                                    Créer un compte
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex space-x-4 w-fit mx-auto mt-4">
                        <div className="w-[64px] h-[4px] bg-tsirotech-primary self-center"></div>
                        <p>ou</p>
                        <div className="w-[64px] h-[4px] bg-tsirotech-primary self-center"></div>
                    </div>

                    <div className="p-4">
                        <div>
                            <p className="flex">
                                <img
                                    src={google}
                                    alt=""
                                    className="w-[32px] h-[32px]"
                                />
                                <span className="self-center ml-2">
                                    S'inscrire sur Google
                                </span>
                            </p>
                        </div>

                        <div>
                            <p className="mt-4">
                                Vous avez déjà un compte ?{' '}
                                <span className="underline">Se connecter</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
