/*BMI Calculator*/

function bmiCalculator (weight, height) 
{
    var bmi = (weight / (height * height));
    bmi = Math.round(bmi);
    return bmi;
}

var bmi = bmiCalculator (prompt("Enter weight:"),prompt("Enter height:"));
if(bmi<18.5)
    {
        alert('\"Your BMI is ' + bmi + ', so you are underweight.\"');
    }
else 
{
    if ( bmi >= 18.5 && bmi <= 24.9) 
    {
       alert('\"Your BMI is ' + bmi + ', so you have a normal weight.\"');
    } 
    else 
    {
      if ( bmi > 24.9) 
      {
        alert('\"Your BMI is ' + bmi + ', so you are overweight.\"');
      }
    }
}
