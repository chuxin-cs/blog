// 两个文件都声明了 format 函数
function format() {

}

// 这里使用var声明变量，其实等价于 window.aboutModule
var aboutModule = {
    name: '云层上的光',
    init() {
        // 初始化 about 逻辑
    },
    getName() {
        return this.name
    },
    setName(name) {
        this.name = name;
        return this.name;
    }
}
// 执行业务
aboutModule.init();

// 可绕开直接进行修改值
aboutModule.name = 20;

// 使用闭包的概念解决这个问题
function module() {
    var about = {
        name: '云层上的光',
        init() { },// 初始化 about 逻辑
    }
    return {
        init() { about.init() },
        getName() { return about.name },
        setName(name) { return about.name = name }
    }
}
var m = module();
console.log(m.getName())
