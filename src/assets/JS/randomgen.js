getnRandomNumbers = function(){
    let rNum = [];
    for (let index = 0; index <100; index++) {
        let rnd = Math.floor((Math.random() * 99999) + 1) ;
        rNum.push(rnd);
        
    }
    return rNum;
}