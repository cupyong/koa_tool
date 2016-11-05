'use strict';

module.exports={
    port: process.env.PORT || 9000,
    mongo: {
        options: {
            db: {
                safe: true
            }
        },
        uri: 'mongodb://localhost/jackblog-dev'
    },
    //redis 配置
    redis: {
        host: '127.0.0.1',
        port: 6379
    },
    //是否初始化数据
    seedDB: false,
}