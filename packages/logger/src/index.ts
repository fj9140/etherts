
export enum LogLevel {
    DEBUG    = "DEBUG",
    INFO     = "INFO",
    WARNING  = "WARNING",
    ERROR    = "ERROR",
    OFF      = "OFF"
}

export class Logger{

    static readonly levels=LogLevel;
    private _logLevel:LogLevel;

    private _log(logLevel:LogLevel,args:Array<any>):void{
        const level=logLevel.toUpperCase();
        if(LogLevel[level]==null){
            this.throwArgumentError('invalid log level name');
        }
        console.log.apply(console,args);
    }

    info(...args:Array<any>):void{
        this._log(Logger.levels.INFO,args);
    }

    throwError(message:string){
        throw this.makeError(message);
    }

    throwArgumentError(message:string){
        return this.throwError(message);
    }

    makeError(message:string){
        const error:Error=new Error(message);
        return error;
    }
}