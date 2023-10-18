var list = [1,2,3,4,5]
// var pos;
// for (pos = 0; pos < list.length; pos++){
//     if (pos % 2 == 0) continue
//       console.log('position => '+ pos + ' Value => '+ list[pos]);  
// }

// var pos;
// for (pos = 0; pos < list.length; pos++){
//     if (pos >= 3) break
//       console.log('position => '+ pos + ' Value => '+ list[pos]);  
// }

var pos;
for(pos =0; pos<list.length; pos++)
{
  if(pos % 2 !== 0) continue
  console.log('position ' + pos + ' Value ' + list[pos]);
}