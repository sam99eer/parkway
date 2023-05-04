const Email = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='45px'
            height='31px'
        >
            <image
                x='0px'
                y='0px'
                width='45px'
                height='31px'
                xlinkHref='data:img/png;base64,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'
            />
        </svg>
    );
};

export default Email;