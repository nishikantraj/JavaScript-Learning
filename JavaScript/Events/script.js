document.getElementById('images').addEventListener('click', function (e) {
    console.log('clicked on UL');
})

document.getElementById('horse').addEventListener('click', function (e) {
    console.log('clicked on horse');
    e.stopPropagation();
},true)

// document.getElementById('images').addEventListener('click', function (e) {
//     // console.log(e.target);
// },false)