function Stat({ icon, title, content }) {
    return (
        <div className="flex px-2 py-4 rounded-2xl border border-tsirotech-border w-[322px] md:w-[466px]">
            <div className="basis-[30%]">
                <i
                    className={`text-[48px] fa ${icon} text-tsirotech-primary ml-2 md:text-[64px]`}
                ></i>
            </div>

            <div className="md:ml-5">
                <div>
                    <p className="font-inter text-center"> {title} </p>
                </div>
                <div className="md:mt-3 md:mr-4">
                    <p className="text-center font-outfit font-bold">
                        {' '}
                        {content}{' '}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Stat;
