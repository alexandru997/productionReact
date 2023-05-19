import React from 'react';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon:React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?:boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'HomePage',

    }, {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About Page',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'PROFILE_PAGE',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'ARTICLES_PAGE',
        authOnly: true,
    },
    // {
    //     path: RoutePath.article_details,
    //     Icon: ProfileIcon,
    //     text: 'ARTICLE_DETAILS_PAGE',
    //     authOnly: true,
    // },
];
