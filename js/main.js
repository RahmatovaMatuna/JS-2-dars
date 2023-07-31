/* if,else if,else */
/*
let a = 46
let b = 10
let c = 55
let d = 21
*/
/*
if (a == 46 && b == 10 && c ==55 && d == 21){
    console.log("Qiymatlarning hammasi to'g'ri!")
}
else{
    console.log("qiymatlardan kamida bittasi noto'g'ri!")
}*/
/*if (a == 46 || b == 10 || c ==55 || d == 21){
    console.log("Qiymatlarning kamida bittasi to'gri!")
}
else{
    console.log("Qiymatlarning hammasi noto'g'ri!")
}*/


/* JS types: undefined,boolean,object */

/*let soz = matn*/
/*let rost = 45==45?true:false*/

/*document.write(rost)*/

/*let arrayObject = [45,78,true,false,"matn","true","js",74]*/
/*let oddiyObject = {ism:"Paxtagul",familyasi:"Rahmatova",yoshi:"18"}*/
/*console.log(oddiyObject.ism,oddiyObject.familyasi)*/


/* Function in JS */

/*function savatchaniTekshir(){
    if (savatcha.length == 0){
        document.write("Savatcha ichida " + savatcha.length + "dona ma'lumot bor");
    }
    else{
        document.write("Savatcha ichida " + savatcha.length + "ta ma'lumot bor");
    }
}
let savatcha = [12,"text"];

savatchaniTekshir();*/


/* Date in JS */

let sana = new Date();

sana.setFullYear(year:2010)

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay()


let oylar = ["yanvar","fevral","mart",'aprel',"may","iyun","iyul","avgust","sentabr","oktyabr","noyabr","dekabr"];

document.write("Bugun " + yil + "-yil " + oylar[oy] + "oyining "
    + kun + " - kuni.Haftaning " + haftaKuni + " - kuni");

/*

let soat = sana.getTime();
let minut = sana.getMinutes();
let sekunt = sana.getMilliseconds();
let time = sana.getTimezoneOffset()
let vard = sana.getVarDate();
let UTC = sana.getUTCSeconds()
*/









