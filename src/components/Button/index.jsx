function Button({text, icon}) {
    return (
        <button className="px-4 py-2 text-white bg-tsirotech-primary rounded-2xl h-12">
           <i className={`fa ${icon}`}></i> {text}
        </button>
    )
}

export default Button; 