module.exports = function getZerosCount(number, base) {
//find simple dividers in base
let dividersArray=[];
let countArray=[];
for(let num=2;num<=base/2;num++)
{
if (base%num===0&&checkIsSimple(num)) dividersArray.push(num);
};
dividersArray.length===0&&dividersArray.push(base);
//for each simple divider
dividersArray.forEach((num)=>{
  //find power in base
  let power=0;
  for (let n=1;Math.pow(num,n)<=number;n++)
  {
    base%Math.pow(num,n)===0&&power++;
  }
  //find 0s count
  zeroCount=0;
  for (let countBase=num; countBase<=number; countBase*=num)
  {
    zeroCount+=Math.floor(number/countBase);
  } 
  countArray.push(Math.floor(zeroCount/power));
});
return Math.min(...countArray);
};

//find minimum of dividerCount/power (Math.Min)

const checkIsSimple=(num)=>{
  let isSimple=true;
  for (let innerNum=2;innerNum<num; innerNum++)
  {
    if (num%innerNum===0) isSimple=false;
  };
  return isSimple;
  }
  