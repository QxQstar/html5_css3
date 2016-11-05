/**
 * Created by star on 2016/10/23.
 */
onmessage = function(){
    var ev = 0;
    for(var i = 0 ; i<1000000;i++){
        ev += i;
    }
    var end = new Date();
    var endStr = end.getMinutes() + ":" + end.getSeconds() + ":" + end.getMilliseconds();
    postMessage({
        sum:ev,
        time:endStr
    });
};

