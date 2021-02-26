var un  =
[
    { from:'JPN',to:'PHL'},
    { from:'BRA',to:'UAE'},
    { from:'USA',to:'BRA'},
    { from:'UAE',to:'JPN'},
    { from:'PHL',to:'TUR'}
]

function buildTable( arr ){
return arr.reduce(function(previousValue, currentValue, currentIndex ){

//build the table.
    previousValue.from[currentValue['from']] = currentValue;
    previousValue.to[currentValue['to']] = currentValue;

//to find start and end.    
    if( !previousValue.from[currentValue['to']] )  previousValue.from[currentValue['to']]= false;
    if(!previousValue.to[currentValue['from']])  previousValue.to[currentValue['from']]= false;

    return previousValue;

},{to:{},from:{}} );


}

function getStart(nodes){
//find start node indx.
    for(var i  in nodes)
    if( !nodes[i] )return i;
}


function print(start,nodes ){


var sorted = [];
//while detecting false from buildTable structure.
    while(start){
        var  node = nodes[start];
        sorted.push(node)
        start = node['to'];
//console.log(start)
    }

return sorted;
}

var sorted = buildTable(un);
console.log(print(getStart(sorted.to),sorted.from));