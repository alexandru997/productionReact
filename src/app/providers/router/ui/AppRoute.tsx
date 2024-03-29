import React, {
    memo, Suspense, useCallback, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRoute = () => {
    const renderWithWrapper = useCallback((route:AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
            {/* { */}
            {/*    routes.map(({ element, path }) => ( */}
            {/*        <Route */}
            {/*            key={path} */}
            {/*            path={path} */}
            {/*            element={( */}
            {/*                <Suspense fallback={<PageLoader />}> */}
            {/*                    <div className="page-wrapper"> */}
            {/*                        {element} */}
            {/*                    </div> */}
            {/*                </Suspense> */}
            {/*            )} */}
            {/*        /> */}
            {/*    )) */}
            {/* } */}
        </Routes>
    );
};

export default memo(AppRoute);
