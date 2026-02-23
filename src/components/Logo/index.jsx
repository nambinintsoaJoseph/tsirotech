import logo from '../../assets/img/logo.png';

function Logo() {
    return (
        <div className='flex space-x-2'>

            <p className="text-[24px] lg:text-[32px] font-semibold font-outfit mt-1">
                Tsiro
                <span className="text-tsirotech-primary">
                    Tech
                </span>
            </p>

            <p>
                <img 
                    src={logo} 
                    alt='TsiroTech Logo' 
                    className='w-8 h-8 lg:w-[53px] lg:h-[48px]'
                />
            </p>

        </div>
    )
}

export default Logo; 