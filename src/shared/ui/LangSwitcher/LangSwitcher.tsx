import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ro' ? 'en' : 'ro');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Short language' : 'Language')}
        </Button>
    );
};
