//Question 1
function gcd(a, b){
    if(b===0){
        return a;
    }
    else{
        return gcd(b, a%b);
    }
}


//Question 3
function quicksort(arr){
    //console.log(arr);
    let low= 0;
    let high= arr.length-1;
    quicksortFunc(arr, low, high);
}

function quicksortFunc(arr, low, high){
    if(low < high){
        let p1= partition(arr, low, high);
        quicksortFunc(arr, low, p1-1);
        quicksortFunc(arr, p1+1, high);
    }
}

function partition(arr, low, high){
    let pivot= arr[high];
    let i= low-1;
    for(let j=low; j<= high-1; j++){
        if(arr[j] < pivot){
            i++;
            let temp= arr[i];
            arr[i]= arr[j];
            arr[j]= temp;
        }
    }
    let temp= arr[i+1];
    arr[i+1]= arr[high];
    arr[high]= temp;
    return i+1;
}

function printList(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]+ " ")
    }
}

// var arr1= [1, 4, 10, 3, 5, 2, 10];
// quicksort(arr1);
// printList(arr1);