function AuthHero({ img, title, subtitle, text }) {
    return (
        <div className="w-[528px] p-2">
            <div>
                <img
                    src={img}
                    alt="TsiroTech"
                    className="w-[405px] h-[405px] mx-auto"
                />
            </div>

            <div>
                <div>
                    <h3 className="font-semibold font-outfit text-[32px] text-center py-4">
                        {title}{' '}
                        <span className="text-tsirotech-primary">
                            {subtitle}
                        </span>
                    </h3>
                </div>

                <div>
                    <p className="py-8 text-center font-inter text-[16px]">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AuthHero;
