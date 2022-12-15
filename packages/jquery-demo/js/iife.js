(function (global) {
    var name = '云层上的光'
    function getName() { return name }
    function setName(value) { name = value;alert(value) }
    // 模块
    global.aboutModule = {
        name,
        getName,
        setName
    }
})(window);
var m = window.aboutModule
console.log("iife window.aboutModule:", m.getName());


// 解决模块之间的依赖问题我们可以
(function (global, moduleAbout) {
    global.homeModule = {
        // 此时我需要获取 aboutModule 的name
        getName: moduleAbout.getName
    }
})(window, window.aboutModule);
var h = window.homeModule;
console.log(h.getName());