import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* this is for testing error */}
            {/* <ErrorButtonBug /> */}
            {/*    <Counter /> */}
            <Page>
                {t('Main Page')}

            </Page>
        </>
    );
};

export default MainPage;
