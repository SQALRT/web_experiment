let arrayObj = [10];
for(let i=0;i<arrayObj.length;i++){
    let val = 0;
    arrayObj.push(val);
    val+=1;
}
del_value = arrayObj.splice(1,1);
for(let i=0;i<arrayObj.length;i++){
    document.write(arrayObj[i]+'</br>')
}
// document.write(del_value[0])
