let weight = +prompt('Nhap can nang don vi kilogam: ');
let heigth= +prompt('Nhap chieu cao don vi met: ');
let bmi = weight / (heigth*heigth);
if (bmi<18.5)
    document.write('Underweight');
else if(bmi<25.0)
    document.write('Normal');
else if(bmi<30)
    document.write('Overweight');
else
    document.write('Obese');
