import { Logger } from "../src/index";

const logger=new Logger();

describe("log test",()=>{
    const logger=new Logger();
    const log=console.log;
    beforeEach(()=>{
        console.log=jest.fn();
    })
    afterAll(()=>{
        console.log=log
    })
    test("no log",()=>{
        expect(console.log).not.toHaveBeenCalled();
    })
    test("info",()=>{
        logger.info('something');
        expect(console.log).toHaveBeenCalledWith('something');

    })

})


