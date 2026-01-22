// // function saveTodb(data) {
// //     return new Promise((success, failure) => {
// //         let internetSpeed = Math.floor(Math.random() * 10) + 1;
// //     if (internetSpeed > 4) {
// //         success("data saved");
// //     }
// //     else {
// //         failure("data not saved");

// //     }
// //     })
    
// // }

// // saveTodb("pankaj")
// // .then((result) => {
// //     console.log("promise was sucess" );
// //     console.log(result);
// //     return saveTodb("gorle");
    
// // })

// // .then((result) => {
// //     console.log("data 2 was saved");
// //      console.log(result);
// //     return saveTodb("Lasnapur");
// // })
 
// // .then((result) => {
// //     console.log("data 3 saves");
// //      console.log(result);
// // })
// // .catch((error) => {
// //     console.log("promise was failed");
// //      console.log("error was promise", error);
    
// // })

// // saveTodb("Pankaj Gorle");
 
// // saveTodb( () => {
// //     console.log("success: your data was saved");

// //     saveTodb("gorle", () => {
// //         console.log("data was saved 2");
// //     },

// //     () => {
// //         console.log("data not saved 2");
// //     }
// // )

// // },
// // () => {
// //     console.log("failure : weak cnnection , data not saved");
// // }
// // );
// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log('color change to ${color}!');
//             resolve("color ws completelychanged");
//         }, delay);
//     });
// }


// async function print() {
//    await changeColor("red", 1000);
//     await changeColor("pink", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("green", 1000);
//     await changeColor("orange", 1000);
// }


// changeColor("red", 1000)
// .then(() => {
//     console.log("color was red");
//     return changeColor("green", 1000);

// })

// .then(() => {
//     console.log("green color");
//     return changeColor("blue", 1000);
// })

// .then(() => {
//     console.log("blue color");
//     return changeColor("yellow", 1000);
// })

// .then(() => {
//     console.log("yellow color");
    
// })


// async function round() {
//     throw "bad request 404";
//     return "pankaj";
// }

// round()
// .then((result) => {
//     console.log("promise was resolve", result);
// })

// .catch((error) => {
//     console.log("promise was rejected", error);
// })


let value = {
    String : "Pankaj",
    Number : 569455,
}