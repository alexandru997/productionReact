import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorButtonBug } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <>
            {/* this is for testing error */}
            {/* <ErrorButtonBug /> */}
            <div>
                {t('Main Page')}

            </div>
        </>
    );
};

export default MainPage;
