import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}
const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2022?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'Alexander',
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
    type: [
        'IT',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                'The program, traditionally called "Hello, world!", is very simple. '
                + 'It displays somewhere the phrase "Hello, world!", Or another similar one, by means of a certain language.',
                'JavaScript is a language that can run programs in '
                + 'different environments. In our case, we are talking '
                + 'about browsers and the Node.js server platform. '
                + "If you haven't written a single line of JS code "
                + "so far and you're reading this text in a browser, on a desktop computer,"
                + ' it means that you are literally seconds away from your first JavaScript program.',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n     '
                + ' document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'The title of this block',
            paragraphs: [
                'The program, traditionally called "Hello, world!", '
                + 'is very simple. It displays somewhere the phrase "Hello, world!", '
                + 'Or another similar one, by means of a certain language.',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = "
                + 'jsonServer.create();\n\nconst router ='
                + ' jsonServer.router(path.resolve(__dirname, '
                + "'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript is a language that can run programs in different environments. '
                + 'In our case, we are talking about browsers and the Node.js server platform. '
                + "If you haven't written a single line of JS code so far and "
                + "you're reading this text in a browser, on a desktop computer, "
                + 'it means that you are literally seconds away from your first JavaScript program.',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - site screenshot',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'The title of this block',
            paragraphs: [
                'JavaScript is a language that can run programs in different environments. '
                + 'In our case, we are talking about browsers and the Node.js server platform. '
                + "If you haven't written a single line of JS code so far and you're reading this "
                + 'text in a browser, on a desktop computer, it means that '
                + 'you are literally seconds away from your first JavaScript program.',
            ],
        },
    ],
} as Article;
export const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={
                    new Array(16).fill(0)
                        .map((item, index) => ({
                            ...article,
                            id: String(index),
                        }))

                }
            />
        </div>
    );
};
export default memo(ArticlesPage);
