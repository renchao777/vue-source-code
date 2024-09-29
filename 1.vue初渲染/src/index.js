// es6的类的写法 一个整体

import { initMixin } from "./init";
import { lifecycleMixin } from "./lifecycle";
import { renderMixin } from "./vdom/index";

function Vue(options) {
  this._init(options); // 入口方法,做初始化操作
}

// 写成一个个的插件进行对原型的扩展
initMixin(Vue);
lifecycleMixin(Vue); // 混合生命周期 渲染
renderMixin(Vue);
// 初始化方法

export default Vue;

//1)将数据先处理成响应式 initstate(针对对象来说主要是增加defineproperty 针对数组就是重写方法)
//2)模板编译:将模板先转换成ast语法树， 将ast语法树生成**render**方法)
//3)调用render函数 会进行取值操作 产生对应的虚拟DOM render(){ c('div',nu11,_v(name))}触发get方法
//4将虚拟dom渲染成真实dom

// 我们可以给模板中的属性 增加一个收集器 dep
// 页面渲染的时候 我们将渲染逻辑封装到watcher中 vm. update(vm.render());
// 让dep记住这个watcher即可， 稍后属性变化了可以找到对应的dep中存放的watcher进行重新渲染
