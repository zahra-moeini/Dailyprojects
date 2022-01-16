//for forin foreach forof

//for
// for (let i = 0; i <=5; i++) {
//     console.log("i="+i);
// }
//object
// const flower={
//     names:"zahra",
//     family:"moeini",
//     age:21,
// }
// for (const key in flower) {
//     console.log(`${key}:${flower[key]}`);
// }

//foreach
//array
// const airplane = [
//   ["motahare", "anahid", "amirmostafa"],
//   ["maryam", "amir", "mina"],
//   ["fatemeh", "fereshte", "kian"],
//   ["kosar", "mohammad", "yousof"],
//   ["mohsen", "hoseyn ", "shaden"],
// ];

// let myfunction = airplane.forEach(Element=>{
//     console.log('row');
//     Element.forEach(elements=>{
//         console.log(`           ${elements}`);
//     })
// });

//forof
// const airplanePassengers = [
//   "benyamin",
//   "vahid",
//   "mahdie",
//   "zaynab",
//   "jamal",
//   "ashkan",
//   "Mehdi",
//   "javad",
//   "pedram",
//   "niloofar",
//   "mahya",
//   "haniyeh",
//   "kosar",
//   "zaynab",
//   "jamal",
//   "Ali",
// ];

// for (let iterator of airplanePassengers) {
//     console.log(iterator);
// }

//map
// const airplane = [
//   ["motahare", "anahid", "amirmostafa"],
//   ["maryam", "amir", "mina"],
//   ["fatemeh", "fereshte", "kian"],
//   ["kosar", "mohammad", "yousof"],
//   ["mohsen", "hoseyn ", "shaden"],
// ];

// const array = airplane.map(row=>{
//     let indexarray=row.map(indexarrayarray=>{
//         console.log(indexarrayarray);
//         return ` ${indexarrayarray}`;
//     });
//     return indexarray;
// });
// console.log(array);
const names=[["zahra","moeini"],["shiva","moeini"]]
const arraNumes = names.map(row=>{
    let indexarrasy=row.map(arrayindexarray=>{
        console.log(arrayindexarray);
        return `  ${arrayindexarray}`;
    });

    return indexarrasy;
})
console.log(arraNumes);

