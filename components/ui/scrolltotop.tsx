import React from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <button
            onClick={handleClick}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                padding: '10px 15px',
                fontSize: '16px',
                borderRadius: '5px',
                backgroundColor: '#333',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 1000,
            }}
        >
            ↑ Topo
        </button>
    );
};

export default ScrollToTop;
