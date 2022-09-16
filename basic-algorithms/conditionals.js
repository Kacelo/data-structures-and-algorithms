  // Function to count number
    // of values greater or equal to x
    function increaseDecreaseValue(arr, x)
    {
        let TotalValue = 0;
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[i] < x)
            {
 
                // Current value is less
                // than required value
                // then we need to increase
                // the value from i + 1 to
                // len(arr) by 1
                for (let j = i + 1; j < arr.length; j++)
                {
                    arr[j] += 1;
                }
            }
            else
            {
 
                // Current value is greater
                // or equal to required
                // value then we need to
                // decrease the value from
                // (i + 1) to len(arr)-1 by 1
                TotalValue += 1;
                for (let j = i + 1; j < arr.length; j++)
                {
                    if (arr[j] == 0)
                    {
                        continue;
                    }
                    else
                    {
                        arr[j] -= 1;
                    }
                }
            }
        }
        return TotalValue;
    }
 
    let x = 4;
    let arr = [5, 4, 3, 2, 1];
    let countValue = increaseDecreaseValue(arr, x);
    document.write(countValue);