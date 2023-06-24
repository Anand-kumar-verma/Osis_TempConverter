let cel = document.getElementById("cel");
let far = document.getElementById("far");
let btn = document.querySelector(".wrapper")
let output = document.querySelector(".output")


// btn.addEventListener("click",function(){
//     let value = cel.target.value;
//     console.log(value)
// });

function getData(){
  let value  = cel.value;
  let type = far.value;

  if(type == "kelvin"){
    // let res = Number.value
      output.innerHTML = parseInt(value)+ 273.15;
      
  }
  if(type == "fahrenheit"){
    // let res = Number.value
    let f = (parseInt(value)* 9) / 5 + 32;
      output.innerHTML = f;

  }
  
}


// cel.addEventListener("input", function () {
//   let c = this.value;
//   let f = (c * 9) / 5 + 32;
//   if (!Number.isInteger(f)) {
//     f = f.toFixed(3);
//   }
//   far.value = f;
// });


// far.addEventListener("input", function () {
//   let f = this.value;
//   let c = (f * 9) / 5 + 32;
//   if (!Number.isInteger(c)) {
//     c = c.toFixed(3);
//   }
//   cel.value = c;
// });

// Number.isInteger(f) : to check if a number is an integer
// f.toFixed(4) : to limit the number to four decimal places
