function bmiCalculator (weight, height) {
    var bmi = (weight / (height * height));
    bmi = Math.round(bmi);
    return bmi;
}

var bmi = bmiCalculator (60,2);
if(bmi<18.5)
    {
        console.log('\"Your BMI is ' + bmi + ', so you are underweight.\"');
    }
else 
{
    if ( bmi >= 18.5 && bmi <= 24.9) 
    {
       console.log('\"Your BMI is ' + bmi + ', so you have a normal weight.\"');
    } 
    else 
    {
      if ( bmi > 24.9) 
      {
        console.log('\"Your BMI is ' + bmi + ', so you are overweight.\"');
      }
    }
}
