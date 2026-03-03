import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem('cookie-accepted');
        if (!hasAccepted) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-accepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-banner-content">
                <p>
                    我們使用 Cookie 來改善您的體驗。繼續瀏覽即代表您同意我們的
                    <a href="/privacy-policy" className="cookie-link">隱私權政策</a>。
                </p>
                <div className="cookie-banner-actions">
                    <button onClick={handleAccept} className="cookie-accept-btn">
                        同意並關閉
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
