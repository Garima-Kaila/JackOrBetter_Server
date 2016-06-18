/*var values = [250, 50, 25, 9, 6, 4, 3, 2, 1,0];
var betLevels = 5;
 
var basicPaytable = {
    ROYAL_FLUSH: [],
    STRAIGHT_FLUSH: [],
    FOUR_OF_A_KIND: [],
    FULL_HOUSE: [],
    FLUSH: [],
    STRAIGHT: [],
    THREE_OF_A_KIND: [],
    TWO_PAIR: [],
    JACKS_OR_BETTER: []
}
var valIdx=0;
for(var winType in basicPaytable){
    for(var idx=1; idx <= betLevels; idx++){
        basicPaytable[winType].push(values[valIdx]*idx);
    }
    valIdx++;
}
*/
var paytable = {
    "ROYAL_FLUSH":[250,500,750,1000,1250],
    "STRAIGHT_FLUSH":[50,100,150,200,250],
    "FOUR_OF_A_KIND":[25,50,75,100,125],
    "FULL_HOUSE":[9,18,27,36,45],
    "FLUSH":[6,12,18,24,30],
    "STRAIGHT":[4,8,12,16,20],
    "THREE_OF_A_KIND":[3,6,9,12,15],
    "TWO_PAIR":[2,4,6,8,10],
    "JACKS_OR_BETTER":[1,2,3,4,5]
}



module.exports = paytable

