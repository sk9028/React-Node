if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod'); //운영
} else{
    module.exports = require('./dev'); //개발
}