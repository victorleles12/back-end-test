export default () => ({
    enviorement: process.env.NODE_ENV,
    database: {
        type: process.env.TYPE,
        host: process.env.HOST,
        port: process.env.PORT,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
})