function Button({ type = 'primary', text, icon }) {
    let bgColor = 'bg-tsirotech-primary';

    if (type == 'danger') bgColor = 'bg-tsirotech-warning';

    return (
        <button
            className={`px-4 py-2 text-white ${bgColor} rounded-2xl h-12  `}
        >
            <i className={`fa ${icon}`}></i> {text}
        </button>
    );
}

export default Button;
