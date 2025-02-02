



let sides: number = 6



input.onButtonPressed(Button.B, () => {
    console.log("raised Button B")
})

input.onGesture(Gesture.Shake, () => {
    console.log("Shaked")
    let roll = randint(1, sides)
   basic.showNumber(roll)
   
    switch (roll) {
        case 1:
             basic.showNumber(1)                   
            break;
case 2:
basic.showNumber(2)
break;
case 3: basic.showNumber(3)
     break;
       
        case 4: basic.showNumber(4)
     break;
       
        case 5:
            basic.showNumber(5)
             break;

case 6:
basic.showNumber(6)
break;



            
            

           
    
    }
})
