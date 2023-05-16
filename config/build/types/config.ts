export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src:string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl:string;
}

export interface BuildOption {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl:string;
    project : 'storybook' | 'frontend' | 'jest';
}
