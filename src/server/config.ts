export interface IConfig {
    port: number
}

const config = {
    port: process.env.NODE_PORT || 9876
};

export { config };
