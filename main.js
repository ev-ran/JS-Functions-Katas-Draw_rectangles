// display numbers 1-20
let bodyElement = document.querySelector('body')

function createHeader(Kata) {
    let createHeader = document.createElement('h2')
    createHeader.append(Kata)
    bodyElement.append(createHeader)
}
//================================
//1. Display the numbers from 1 to 20.
createHeader('Kata 1')

let finalArr1 = []
for (i = 1; i < 21; i = i + 1) {
    finalArr1.push(i)

}
let finalString1 = finalArr1.join(', ')
ourDOMHelper('div', bodyElement, finalString1)


createHeader('Kata 2')
let finalArr2 = []
for (i = 2; i < 21; i = i + 2) {
    finalArr2.push(i)

}
let finalString2 = finalArr2.join(', ')
ourDOMHelper('div', bodyElement, finalString2)


createHeader('Kata 3')
let finalArr3 = []
for (i = 1; i < 20; i = i + 2) {
    finalArr3.push(i)

}
let finalString3 = finalArr3.join(', ')
ourDOMHelper('div', bodyElement, finalString3)


createHeader('Kata 4')
let finalArr4 = []
for (i = 5; i < 101; i = i + 5) {
    finalArr4.push(i)

}
let finalString4 = finalArr4.join(', ')
ourDOMHelper('div', bodyElement, finalString4)

createHeader('Kata 5')
let finalArr5 = []
for (i = 1; i < 11; i = i + 1) {
    finalArr5.push(i * i)

}
let finalString5 = finalArr5.join(', ')
ourDOMHelper('div', bodyElement, finalString5)


createHeader('Kata 6')
let finalArr6 = []
for (i = 20; i > 0; i = i - 1) {
    finalArr6.push(i)

}
let finalString6 = finalArr6.join(', ')
ourDOMHelper('div', bodyElement, finalString6)

createHeader('Kata 7')
let finalArr7 = []
for (i = 20; i > 0; i = i - 2) {
    finalArr7.push(i)

}
let finalString7 = finalArr7.join(', ')
ourDOMHelper('div', bodyElement, finalString7)


createHeader('Kata 8')
let finalArr8 = []
for (i = 19; i > 0; i = i - 2) {
    finalArr8.push(i)

}
let finalString8 = finalArr8.join(', ')
ourDOMHelper('div', bodyElement, finalString8)


createHeader('Kata 9')
let finalArr9 = []
for (i = 100; i > 0; i = i - 5) {
    finalArr9.push(i)

}
let finalString9 = finalArr9.join(', ')
ourDOMHelper('div', bodyElement, finalString9)


createHeader('Kata 10')
let finalArr10 = []
for (i = 10; i > 0; i = i - 1) {
    finalArr10.push(i * i)

}
let finalString10 = finalArr10.join(', ')
ourDOMHelper('div', bodyElement, finalString10)


//=============================
//11. Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

createHeader('Kata 11')

let finalArr11 = [];

for (i = 0; i < 20; i = i + 1) {
    finalArr11.push(sampleArray[i]);

}

let finalString11 = finalArr11.join(', ')
ourDOMHelper('div', bodyElement, finalString11)

//======================================
// 12. Display all the even numbers contained in sampleArray.

createHeader('Kata 12')


let finalArr12 = []

for (i = 0; i < sampleArray.length; i = i + 1) {

    let currentNumber12 = sampleArray[i];

    if (currentNumber12 % 2 === 0) {
        finalArr12.push(currentNumber12);
    }
}
let finalString12 = finalArr12.join(', ');
ourDOMHelper('div', bodyElement, finalString12);

//======================================
// 13. Display all the odd numbers contained in sampleArray. 

createHeader('Kata 13')

let finalArr13 = []

for (i = 0; i < sampleArray.length; i = i + 1) {

    let currentNumber13 = sampleArray[i];

    if (currentNumber13 % 2 !== 0) {
        finalArr13.push(currentNumber13);
    }
}
let finalString13 = finalArr13.join(', ');
ourDOMHelper('div', bodyElement, finalString13);

//======================================

//14. Display the square of each element in sampleArray

createHeader('Kata 14')

let finalArr14 = [];

for (i = 0; i < sampleArray.length; i = i + 1) {

    finalArr14.push(sampleArray[i] * sampleArray[i]);
}

let finalString14 = finalArr14.join(', ')
ourDOMHelper('div', bodyElement, finalString14)

//================================
//15. Display the sum of all the numbers from 1 to 20.
createHeader('Kata 15')

let sum15 = 0;
for (i = 1; i < 21; i = i + 1) {
    sum15 = sum15 + i;
}
let finalString15 = "Sum of all the numbers from 1 to 20 is: " + sum15;
ourDOMHelper('div', bodyElement, finalString15);

//================================
//16. Display the sum of all the elements in sampleArray.

createHeader('Kata 16')

let sum16 = 0;
for (i = 1; i < sampleArray.length; i = i + 1) {
    let currentNumber16 = sampleArray[i];
    sum16 = sum16 + currentNumber16;
}

let finalString16 = "Sum of all the numbers in sampleArray is: " + sum16;
ourDOMHelper('div', bodyElement, finalString16);

//==================================
// 17 Display the smallest element in sampleArray.
createHeader('Kata 17')

let minNumber17 = 1000;
for (i = 1; i < sampleArray.length; i = i + 1) {
    let currentNumber17 = sampleArray[i];

    if (currentNumber17 < minNumber17) {
        minNumber17 = currentNumber17;
    }

}

let finalString17 = "Smallest element in sampleArray is: " + minNumber17;
ourDOMHelper('div', bodyElement, finalString17);

//==================================
// 18 Display the largest element in sampleArray.
createHeader('Kata 18')

let maxNumber18 = 0;
for (i = 1; i < sampleArray.length; i = i + 1) {
    let currentNumber18 = sampleArray[i];

    if (currentNumber18 > maxNumber18) {
        maxNumber18 = currentNumber18;
    }
}

let finalString18 = "Largest element in sampleArray is: " + maxNumber18;
ourDOMHelper('div', bodyElement, finalString18);



//==================================
//  19. Display 20 solid gray rectangles, each 20px high and 100px wide.
createHeader('Kata 19')

let color19 = "gray"; width19 = "100px"; height19 = "20px";
for(let i = 1; i <=20; i = i + 1) {

    ourDOMHelper_Draw("div", bodyElement, "", "", "rectangle", "gray", "100px", "20px")
}

//==================================
// 20. Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px

createHeader('Kata 20')

color20 = "gray"; height20 = "20px";
let start20 = 100;

for(let i = 1; i <=20; i = i + 1) {
    start20 = start20 + 5;
    let width20 = start20 +"px";
 

    ourDOMHelper_Draw("div", bodyElement, start20, "", "rectangle", "gray", width20, "20px")
}
//==================================
// 21. Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.

createHeader('Kata 21')
for (let i = 0; i < sampleArray.length; i++) {
    let size = sampleArray[i];
    let width21 = size + "px";

    ourDOMHelper_Draw("div", bodyElement, size, "", "rectangle", "gray", width21, "20px")
}

//==================================
// 22. As in #21, but alternate colors so that every other rectangle is red

createHeader('Kata 22')
for (let i = 0; i < sampleArray.length; i++) {
    let size = sampleArray[i];
    let width21 = size + "px";

    if (i%2 === 0) {
        color = "red";
    }  else {
        color = "gray";
    }

    ourDOMHelper_Draw("div", bodyElement, size, "", "rectangle", color, width21, "20px")
}

//==================================
// 23. As in #21, but alternate colors so that every other rectangle is red

createHeader('Kata 23')
for (let i = 0; i < sampleArray.length; i++) {
    let size = sampleArray[i];
    let width21 = size + "px";

    if (size%2 === 0) {
        color = "red";
    }  else {
        color = "gray";
    }

    ourDOMHelper_Draw("div", bodyElement, size, "", "rectangle", color, width21, "20px")
}

//====================================

function ourDOMHelper(elementType, targetElement, textStr, idStr, classStr) {


    let newElement = document.createElement(elementType)
    if (textStr !== "" && textStr !== undefined) {
        newElement.append(textStr)
    }
    if (idStr !== "" && idStr !== undefined) {
        newElement.id = idStr
    }
    if (classStr !== "" && classStr !== undefined) {
        newElement.className = classStr
    }
    targetElement.append(newElement)
    return newElement

} 

function ourDOMHelper_Draw(elementType, targetElement, textStr, idStr, classStr, color, width, height) {


    let newElement = document.createElement(elementType)
    if (textStr !== "" && textStr !== undefined) {
        newElement.append(textStr)
    }
    if (idStr !== "" && idStr !== undefined) {
        newElement.id = idStr
    }
    if (classStr !== "" && classStr !== undefined) {
        newElement.className = classStr
    }
    newElement.style.backgroundColor = color;
    newElement.style.width = width;
    newElement.style.height = height;



    targetElement.append(newElement)
    return newElement

} 