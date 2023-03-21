import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import './PageLoader.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('page__loader', {}, [className])}>
            <Loader />
        </div>
    );
};
