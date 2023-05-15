import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entities/Country/model/types/country';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps{
    className?:string;
    value?: Country;
    onChange?:(value:Country) => void;
    readonly ?:boolean;
}

const options = [
    { value: Country.French, content: Country.French },
    { value: Country.SUA, content: Country.SUA },
    { value: Country.UK, content: Country.UK },
    { value: Country.Romania, content: Country.Romania },
    { value: Country.Moldova, content: Country.Moldova },
];

export const CountrySelect = memo((props:CountrySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Select country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
