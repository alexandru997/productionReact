import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [])}>

            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('toggle')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('I will make you into a great nation,'
                    + ' and I will bless youI will make your name great,'
                    + ' and you will be a blessing.I will bless those '
                    + 'who bless you, and whoever curses you '
                    + 'I will curse;and all peoples on earth will be blessed'
                    + ' through you (Genesis 12:2-3)')}
            </Modal>
        </div>
    );
};
