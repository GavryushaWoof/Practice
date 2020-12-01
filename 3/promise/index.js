const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'wokring'
        }
        resolve(backendData)
    }, 2000)
})
// p.then((data)=>{
//     console.log('Promise resolved', data);
// })
p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })

})
    .then(clientData => {
        console.log("Data received", clientData);
    })
    .catch(err => { console.error('Error : ', err); })
    .finally(() => { console.log('Finally'); })


function promisifySetTimeout(ms, ms2) {
    return new Promise((res, rej) => {
        const date = Date.now();
        setTimeout(() => {

            res(date);

        }, ms);
        setTimeout(() => {

            rej(new Error('recm'))
        }, ms2);

        fetch('some-data').then(data => res(data));
        setTimeout(() => rej(new Error('сервер работает слишком долго')), 5000);
    });
}

promisifySetTimeout(2000, 1000)
    .then(data => console.log('я получил данные: ', Date.now() - data))
    .catch((error) => console.error(error))

Promise.all([promisifySetTimeout(2000, 1000), promisifySetTimeout(5000, 1000)]).then(() => { console.log('All promises') })
Promise.race([promisifySetTimeout(2000, 1000), promisifySetTimeout(5000, 1000)]).then(() => { console.log('Race promises') })


new Promise((res) => res())
    .then(() => console.log('Promise', 2));

setTimeout(() => console.log('setTimeout', 3), 0);

console.log('console.log', 1);