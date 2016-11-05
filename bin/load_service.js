//加载服务
'use strict';
const mongoose = require('mongoose');
mongoose.connect(config.mongo.uri, config.mongo.options);