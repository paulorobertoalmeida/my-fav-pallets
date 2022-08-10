//color that the user typed
const inputColor = document.getElementsByClassName('')

//this is the variable where the colors will be stored
const colorStored = "";

// this function pushed a color into our variable to be used in the future
const myColors =((inputColor)=>{
    colorStored.push(inputColor);
    return colorStored;
})

myColors();

//This function gets a color that users typed and verify if its exists.
const translatePallets = ((inputColor) =>{
    if(inputColor === '#'){
        console.log(`Please type an HEX of a color`);
    } else if (inputColor === colorStored){
        console.log('Please choose another color')

    }
})

//Create a box to select RGB values 0 till 255.
const selectColorBox = (()=> {
    
})