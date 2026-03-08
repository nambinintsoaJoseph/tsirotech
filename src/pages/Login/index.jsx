import AuthHero from '../../components/AuthHero';
import Button from '../../components/Button';
import berger from '../../assets/img/login/berger.png';
import Logo from '../../components/Logo';
import google from '../../assets/img/login/google.svg';

function Login() {
    return (
        <div className="h-screen flex flex-col">
            <header className="flex justify-between p-4">
                <div>
                    <Logo />
                </div>

                <div>
                    <Button text={"S'inscrire"} icon={'fa-user-plus'} />
                </div>
            </header>

            <div className="grow bg-tsirotech-background  p-2 xl:flex xl:justify-between">
                <div className="mt-16 hidden xl:block xl:ml-20">
                    <AuthHero
                        img={berger}
                        title={'Rejoignez la'}
                        subtitle={'révolution culinaire !'}
                        text="Découvrez, créez et partagez des recettes originales avec une communauté passionnée."
                    />
                </div>

                <div className="mt-[64px] md:w-[486px] md:mx-auto xl:mx-0 xl:mt-28 xl:mr-20">
                    <div>
                        <h3 className="font-outfit font-semibold text-[24px] text-center md:text-[32px]">
                            Connectez-vous !
                        </h3>
                    </div>

                    <div>
                        <form className="mt-[32px] space-y-4 p-4">
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

                            <div className="flex justify-end mt-4">
                                <p className="underline">
                                    Mot de passe oublié ?
                                </p>
                            </div>

                            <div>
                                <button className="bg-tsirotech-primary h-[48px] text-center w-full rounded-lg text-white mt-4">
                                    Se connecter
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
                                    Connectez-vous avec Google
                                </span>
                            </p>
                        </div>

                        <div>
                            <p className="mt-4">
                                Etes-vous nouveau ?{' '}
                                <span className="underline">
                                    Créer un compte
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
