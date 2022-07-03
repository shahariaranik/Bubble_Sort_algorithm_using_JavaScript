function bubleShort (arr)
{
    for(let i = 0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                let temp =arr[i];
                arr[i]= arr[j];
                arr[j]=temp
            }
        }
    }
}

let arr=[10,5,9,6,4,50,4,65];
bubleShort(arr);
console.log(arr);