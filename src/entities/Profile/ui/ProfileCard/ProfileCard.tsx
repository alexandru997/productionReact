import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'shared/const/common';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?:boolean;
    error?:string;
    readonly ?:boolean;
    onChangeLastname?:(value?:string)=>void;
    onChangeFirstname?:(value?:string)=>void;
    onChangeCity?:(value?:string)=>void;
    onChangeAge?:(value?:string)=>void;
    onChangeUsername?:(value?:string)=>void;
    onChangeAvatar?:(value?:string)=>void;

}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, data,
        isLoading, error,
        onChangeLastname,
        onChangeFirstname,
        readonly,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,

    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Something went wrong')}
                    text={t('Reload the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods:Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt="" />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Last name')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('First name')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}

                />
                <Input
                    value={data?.age}
                    placeholder={t('Age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}

                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}

                />
                <Input
                    value={data?.username}
                    placeholder={t('Username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}

                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Link for avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}

                />
                <Select
                    label={t('Select currency')}
                    options={
                        [
                            { value: Currency.MDL, content: Currency.MDL },
                            { value: Currency.EUR, content: Currency.EUR },
                            { value: Currency.USD, content: Currency.USD },
                        ]
                    }
                />
            </div>
        </div>
    );
};