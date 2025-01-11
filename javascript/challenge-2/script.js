var massMark = 78
var heightMark = 1.69
BMIMark = massMark / (heightMark * heightMark)


var massJhon = 92
var heightJhon = 1.95
BMIJhon = massJhon / (heightJhon * heightJhon)


if(BMIMark>BMIJhon){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJhon})`);

} else{
    console.log(`John's BMI (${BMIJhon} is higher than Mark's (${BMIMark})`);
}