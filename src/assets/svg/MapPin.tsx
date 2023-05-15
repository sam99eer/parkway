const MapPin = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='20px'
            height='34px'
        >
            <image
                x='0px'
                y='0px'
                width='20px'
                height='34px'
                xlinkHref='data:img/png;base64,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'
            />
        </svg>
    );
};

export default MapPin;
