var colorsList = ["purple","teal"]
var colorChangeButton = document.getElementById("colorChangeButton")
var color = "purple"
var colorSelector= "purple"

document.getElementById("colorChangeButton").addEventListener("click", function toggleColor(){
    switch(color){
        case colorsList[0]: 
            document.body.style.backgroundColor= "Purple"
            color = colorsList[0]
            colorSelector = colorsList[0]
            console.log(color)
            color= colorsList[1]
            break
        case colorsList[1]:
            document.body.style.backgroundColor= "teal"
            color = colorsList[1]
            colorSelector = colorsList[1]
            console.log(color)
            color= colorsList[0]
            break
        default : 
        document.body.style.backgroundColor= "Purple"
        color = colorsList[0]
        console.log(color)
        color= colorsList[1]
        break
    }
})


var  purple = {
    name: "Purple",
    hexidecimal: "#800080",
    functional:  "rgb(128, 0, 128)"}


var teal = {
    name: "Teal",
    hexidecimal: "#008080",
    functional: "rgb(0, 128, 128)",
}

colorChangeButton.addEventListener("click",
function changeColorInfo(){
   
   if(colorSelector == colorsList[0]){
    document.getElementById("name").innerText = "Color Name: " + purple.name;
    document.getElementById("hexidecimal").innerText = "Hex: " + purple.hexidecimal;
    document.getElementById("functional").innerText = "RGB:  " + purple.functional;
    console.log(colorSelector + " " + 1)
   } else {
    document.getElementById("name").innerText = "Color Name: " + teal.name;
    document.getElementById("hexidecimal").innerText = "Hex: " + teal.hexidecimal;
    document.getElementById("functional").innerText = "RGB:  " + teal.functional; 
    console.log(colorSelector + " " + 2)
   } 
})
let devGreeting = ["Hi there!", "Thanks for checking out my site.", "Just toggle the button to see my two favorite colors.", '"The Color Info" block will show the name of the color, and two ways to call it in CSS.', "Enjoy =)"]
for (i = 0; i < devGreeting.length; i++){
  
        console.log(devGreeting[i])
    }

    


    
    
    


