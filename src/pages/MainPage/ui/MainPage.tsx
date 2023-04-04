import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <>
            {/* this is for testing error */}
            {/* <ErrorButtonBug /> */}
            {/*    <Counter /> */}
            <div>
                {t('Main Page')}

            </div>
        </>
    );
};

export default MainPage;
