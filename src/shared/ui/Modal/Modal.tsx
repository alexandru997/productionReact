import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { ReactNode } from 'react';
import cls from './Modal.module.scss';

interface ModalProps{
    className?:string
    children?:ReactNode
    isOpen?:boolean;
    onClose?:()=>void;
}

export const Modal = (props:ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const { t } = useTranslation();

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    };
    console.log(isOpen, 'isOpen');
    const mods:Record<string, boolean> = {
        [cls.opened]: isOpen,

    };

    return (
        <div className={classNames(cls.Modal, {}, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
