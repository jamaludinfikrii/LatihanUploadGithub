var w = [0,1,2,3,4,5]
var a = ['Andi','Seto','Seno']

var filterNama = a.filter(function(a){
    return a.includes('S')
})

var mapNama = a.map(function(val){
    return val + 'Saya'
})

var mapAngka = w.map(function(val){
    return val + 5
})

// console.log(mapAngka.join(''))


var x = w.filter((a) => a !== 2);


var newArr =[]
for(var i = 0 ; i < w.length ; i++){ // i = 1
    if(w[i] !== 2){
        newArr.push(w[i])
    }
}


// console.log(x)
// console.log(newArr)
// console.log(mapNama)
// var x = w.filter(function(val) {
//     return val !== 2
// }); 

// var orang = [
//     {nama : "Andi", marga: "Hasibuan"}, // looping 1 // 0
//     {nama : "Budi", marga: "Sinaga"},
//     {nama : "Caca", marga: "Pasaribu"}
// ];
    
//   var a = orang.map(function(item){
//       var fullname = [item.nama,item.marga].join(" ")
//       return fullname
//   });

//   console.log(a.join(' '))


// var nama = 'Andi'
// var umur = '30'

// var manusia = {
//     nama ,
//     umur,
//     fn : function(){
//         return ' Hello'
//     }
// }
// var manusia = {
//     nama ,
//     umur,
//     fn(){
//         return 'Hello'
//     }
// }
class manusia {
    constructor(nama,umur){
        this.nama = nama;
        this.umur = umur;
        this.add = function(a){
            this.nama = a 
        }
    }
}



// let nama = new Set();
// let orang = new manusia('Andi','Budi')
// orang.add('Adi')
// nama.add('Adi').add('Budi').add('Adi');
// console.log(nama);
// console.log(orang)
// console.log(nama.size);


// let angka = [1,2,3,4,1,2,5,6];
//     console.log(angka);
// let nomor = new Set(angka); 
//     console.log(nomor);
// let arrayAngka = [...nomor]
//     console.log(arrayAngka);

var nama = ['Andi' , 'Seto']

var [a,b] = nama

console.log(a)






   
    // console.log(orang.map(namaLengkap)[0]);
    // console.log(orang.map(namaLengkap)[1]);
    // console.log(orang.map(namaLengkap)[2]);

















// var fn = function(val){
//     return val + 'saya'
// }
// orang.map(fn)
    














// tesMap()