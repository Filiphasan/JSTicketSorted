const tickets =[['JPN','PHL'],['BRA','UAE'],['USA','BRA'],['UAE','JPN'],['PHL','TUR']];
let arr=[];
let firstCountry;
let from;
let to;

findFirstCountry(tickets);

function findFirstCountry(tickets){
    tickets.map(item =>{
        arr.push(item[0]);
    });
    tickets.forEach(item => {
        arr.forEach(ar => {
            if (ar===item[1]) {
                let index= arr.indexOf(ar);
                arr.splice(index,1);
            }
        });
    });
    firstCountry=arr[0];
    return firstCountry;
}
tickets.forEach(item => {
    if (item[0]===firstCountry) {
        return console.log(tickets.indexOf(item));
    }
});
