function Service({ title, cover, icon, content }) {
    return (
        <div className="w-[350px]">
            <div>
                <img
                    src={cover}
                    alt={`Service TsiroTech - ${title}`}
                    className="w-[350px] h-[250px] rounded-2xl"
                />
            </div>

            <div className="mt-8 mx-auto p-4">
                <div className="flex justify-center">
                    <i
                        className={`${icon} text-[64px] text-tsirotech-primary`}
                    ></i>
                </div>

                <div>
                    <h4 className="font-outfit font-bold text-[20px] text-center my-4">
                        {title}
                    </h4>
                </div>

                <div>
                    <p className="font-inter text-center text-[14px] md:text-base">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Service;
