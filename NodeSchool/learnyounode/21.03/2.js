function Sum(arr) {
    let stdout = 0
    for (let i = 2; i < arr.length; i++) {
        stdout += +arr[i]
    }
    return stdout
}
console.log(Sum(process.argv))