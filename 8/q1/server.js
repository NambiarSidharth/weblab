function automorph(num){
  if((num**2).toString().includes(num.toString())){
    console.log("an automorphic number")
  }else{
    console.log("not an automorphic number")
  }
}
automorph(25)
