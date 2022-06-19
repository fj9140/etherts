
export enum LogLevel {
    DEBUG,
    INFO ,
    WARNING,
    ERROR,
    OFF
}

export class Logger{

    private _logLevel:LogLevel=LogLevel.DEBUG;

    private _log(logLevel:LogLevel,args:Array<any>):void{
        if(logLevel<this._logLevel){
            return;
        }
        console.log.apply(console,args);
    }

    info(...args:Array<any>):void{
        this._log(LogLevel.INFO,args);
    }

    setLogLevel(logLevel:LogLevel):void{
        this._logLevel=logLevel;
    }

    throwError(message:string){
        throw this.makeError(message);
    }

    private makeError(message:string):Error{
        const error:Error=new Error(message);
        return error;
    }


}