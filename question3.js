const decimalToHex = (value=>{
   let sum;
   let remainder;
   const array=[];
    do
    {
        sum=Math.floor(value/16);
        if(sum === 0)
        {
            remainder=value;
            array.unshift(remainder);
        }
        else
        {
        remainder=value-sum*16;
        array.unshift(remainder);
        value=Math.floor(value/16);
        }
    }
    while(sum>=1)
    array.forEach((element, index)=>
    {
        if(element === 10)
        array[index]="A";
        else if(element === 11)
        array[index]="B";
        else if(element === 12)
        array[index]="C";
        else if(element === 13)
        array[index]="D";
        else if(element === 14)
        array[index]="E";
        else if(element === 15)
        array[index]="F";
        
    })

    return array.join("");
})
const rgbaToHEX = (string=>{
    string = string.replaceAll(" ","");
    string = string.slice(4,string.length-1);
    string = string.split(",");
    string=string.map(element=>Number(element));
    string=string.map(element=>decimalToHex(element));
    string.forEach((element,index)=>{
        if(element.length<2)
        string[index]="0"+string[index];
    })
    return "#"+string.join("");
})
function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}
const HEXToRGB = hex=>{
    let newArray=[];
    for(let i=1; i<hex.length;i++)
    {
        newArray.push(hex[i]);
        
    }
    newArray=[newArray[0]+newArray[1],newArray[2]+newArray[3],newArray[4]+newArray[5]];
    newArray.forEach((element, index)=>
    {
        if(element[1] === "A")
        newArray[index]=setCharAt(newArray[index],1,"10");
        else if(element[1] === "B")
        newArray[index]=setCharAt(newArray[index],1,"11");
        else if(element[1] === "C")
        newArray[index]=setCharAt(newArray[index],1,"12");
        else if(element[1] === "D")
        newArray[index]=setCharAt(newArray[index],1,"13");
        else if(element[1] === "E")
        newArray[index]=setCharAt(newArray[index],1,"14");
        else if(element[1] === "F")
        {
        newArray[index]=setCharAt(newArray[index],1,"15");;
        }
    })
    newArray.forEach((element, index)=>
    {
        if(element[0] === "A")
        newArray[index]=setCharAt(newArray[index],0,`${10*16},`);
        else if(element[0] === "B")
        newArray[index]=setCharAt(newArray[index],0,`${11*16},`);
        else if(element[0] === "C")
        newArray[index]=setCharAt(newArray[index],0,`${12*16},`);
        else if(element[0] === "D")
        newArray[index]=setCharAt(newArray[index],0,`${13*16},`);
        else if(element[0] === "E")
        newArray[index]=setCharAt(newArray[index],0,`${14*16},`);
        else if(element[0] === "F")
        {
            newArray[index]=setCharAt(newArray[index],0,`${15*16},`);
        }
        else
        newArray[index]=setCharAt(newArray[index],0,`${newArray[index]*16},`);
    })
    let newArray2=[];
    newArray.forEach((element, index)=>
    {
    newArray2.push(element.split(','));
    })
    newArray2=newArray2.flat();
    newArray2.forEach((element, index)=>{
        newArray2[index]=Number(element);
    })
    let newArray3=[newArray2[0]+newArray2[1],newArray2[2]+newArray2[3],newArray2[4]+newArray2[5]];
    return `rgb(${newArray3[0]},${newArray3[1]},${newArray3[2]})`;
}
HEXToRGB("#FFF000");
