function findMaxDifference(...arr){
    //check if array has atleast two elements
    if(arr.length<2)
    {
        return;
    }


    //check minmum value in array
    let minVal = arr[0]
    for (let i = 1; i < arr.length; i++) {
        // check if current element is less than minimum value(previous value)
        if(arr[i]<minVal){
            minVal = arr[i];
        }
        
    }

    //check maximum value in array
    let maxVal = arr[0]
   
    for (let i = 1; i < arr.length; i++) {
        // check if current element is less than maximum value(previous value)
        if(arr[i]>maxVal){
            maxVal = arr[i];
        }
        
    }


    console.log(`Outputs: ${maxVal} and ${minVal}`)
    console.log("Maximum Value: "+maxVal)
    console.log("Minimum value: "+minVal)
    console.log("Differnece between minimum and maximum: "+ (maxVal-minVal))
}


findMaxDifference(7,1,2,10,3,4,5)