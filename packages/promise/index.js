class cxPromise {
    constructor(callback) {
        // 成功的状态
        // 失败的状态

        try {
            callback()
        } catch (error) {

        }
    }
}


const myPromise = new cxPromise();
console.log(myPromise);

