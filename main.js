const inputColor = document.getElementsByClassName('')

const colorStored = "";

// this function stores a color to be used in the future
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