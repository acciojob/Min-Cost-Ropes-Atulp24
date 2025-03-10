function mincost(arr)
{ 
//write your code here
// return the min cost
  let arr1 = arr.sort((a, b) => a - b);
  let cost = 0;
  while(arr1.length > 1){
	  let a = arr1.shift();
	  let b = arr1.shift();
	  cost += a + b;
	  arr1.push(a + b);
	  arr1.sort((a, b) => a - b);
  }
	return cost;
}

module.exports=mincost;
