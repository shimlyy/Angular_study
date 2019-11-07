interface ClockInterface{
    currentTime: Date;
    serTime(d: Date);
}
class Clock implements ClockInterface {
    currentTime: Date;
    serTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number, m:number){}
}