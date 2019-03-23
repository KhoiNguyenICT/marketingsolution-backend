import * as log4js from 'log4js';

const levels = {
    trace: 'trace',
    debug: 'debug',
    info: 'info',
    warn: 'warn',
    error: 'error',
    fatal: 'fatal',
};

export default class LogService {

    private _log: any;

    constructor() {
        this._log = log4js.getLogger();
    }

    trace(message: string) {
        this._log.level = levels.trace;
        this._log.trace(message);
    }

    debug(message: string) {
        this._log.level = levels.debug;
        this._log.debug(message);
    }

    info(message: string) {
        this._log.level = levels.info;
        this._log.info(message);
    }

    warn(message: string) {
        this._log.level = levels.warn;
        this._log.warn(message);
    }

    error(message: string) {
        this._log.level = levels.error;
        this._log.error(message);
    }

    fatal(message: string) {
        this._log.level = levels.fatal;
        this._log.fatal(message);
    }

}
