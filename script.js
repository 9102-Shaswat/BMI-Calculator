const getvalue = () => {
  let weight = document.querySelector("#formGroupExampleInput").value;
  let height = document.querySelector("#formGroupExampleInput2").value;
  let unit = document.querySelector(".form-check-input").value;
  
  const calcdata=(weight,height,unit)=>{
    if(unit=="cm"){
        return weight/(height*height*0.0001)
    }else if(unit=="inches"){
        return weight/(height*height*0.000645)
    }
    else{
        return weight/(height*height*0.0929)
    }
  }
  const bmi=Math.round(calcdata(weight,height,unit))
  var category
  if(bmi<18.5){
    category="UNDERWEIGHT"
  }else if(bmi>=18.5 && bmi<24.9){
    category="NORMAL WEIGHT"
  }else if(bmi>=25.0 && bmi<29.9){
    category="OVERWEIGHT"
  }else if(bmi>=30.0 && bmi<34.9){
    category="OBESITY CLASS I"
  }else if(bmi>=35.0 && bmi<39.9){
    category="OBESITY CLASS II"
  }else{
    category="OBESITY CLASS III"
  }

  
  var data1 = document.getElementById('bmi-value')
  var data2 = document.getElementById('bmi-category')
  data1.innerHTML=`Your BMI value is ${bmi}`
  data2.innerHTML=`Category: ${category}`
}


