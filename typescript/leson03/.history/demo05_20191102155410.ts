function sumAll(score:number[][]){
    var sum = 0;
    for(var i=0; i<score.length;i++){
        var row = score[i];
        for(var j=0;j<row.length;j++){
            var column= row[j]
            sum+=column;
        }
    }
    return sum;
}