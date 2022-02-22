getnRandomNumbers = function(){
    let rNum = [];
    for (let index = 0; index <10; index++) {
        let rnd = Math.floor((Math.random()*99999)+1);
        rNum=PushManager(rnd);
        
    }
    return rNum;
}