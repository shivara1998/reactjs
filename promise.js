let promise=new Promise((resolve,reject)=>{
  let isWaterFetched=true
  if(isWaterFetched===false)
  {
    resolve(document.body.style.backgroundColor="yellow")
  }
else
{
    reject(document.body.style.backgroundColor="red")
}
})
promise.then((x)=>console.log(x)).catch((y)=>console.log(y))