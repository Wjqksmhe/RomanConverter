const convertBtn = document.getElementById("convert-btn")
     const input = document.getElementById("number")
     const output = document.getElementById("output")


convertBtn.addEventListener('click',()=>{
        if(input.value == ""){
          output.innerText = "Please enter a valid number"
        }
        else if(parseInt(input.value) < 1){
          output.innerText = "Please enter a number greater than or equal to 1"
        }
        else if(parseInt(input.value) > 3999){
          output.innerText = "Please enter a number less than or equal to 3999"
        }
        else {
          output.innerText = convertArabicNumerals(input.value)
        }
      })


const arabicNumerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

const romanNumerals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']

function convertArabicNumerals(number){
  const outputString = []
  let currentNum = number
  while (currentNum > 0){
    for (let i = 0; i < arabicNumerals.length; i++){
      if (currentNum / arabicNumerals[i] >= 1){
        outputString.push(romanNumerals[i])
        currentNum -= arabicNumerals[i]
        i = 0
        break
      }
    }
  }
  return outputString.join("")
}