const chalk = require('chalk');

colorLogger = (level, color, msg) => {
    if ( console[level] && chalk[color] ) {
        return console[level](chalk[color](msg));
    }
    else if ( !console[level] ) {
        throw new Error('Not a valid log-level...!!!');
    }
    else {
        return console[level](msg);
    }
}

module.exports = colorLogger;