export interface IConfig {
    port: number;
    prettyLog: boolean;
}

const config = {
    port: process.env.NODE_PORT || 9876,
    prettyLog: process.env.NODE_ENV == 'development',
};

export { config };
