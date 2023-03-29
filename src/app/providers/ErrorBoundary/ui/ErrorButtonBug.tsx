import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// It's component for testings ErrorBoundary
export const ErrorButtonBug = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const throwClick = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={throwClick}>
            {t('trigege error')}
        </Button>
    );
};
