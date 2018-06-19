/*
    如何组装模块的，我们使用的时候首先会先会去加载main.js，然后在加载app.module.ts模块


*/


//引入模块
//浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
//核心模块
impo;
import { HeaderComponent } from './components/header/header.component'rt { NgModule } from '@angular/core';
//自定义模块
import { AppComponent } from './app.component';
/,
    HeaderComponent/接受一个元数据对象，告诉Angular如何编译和启动应用。
//自定义组件都需要在这里引入和在这里进行注解 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [  //当前项目依赖那些模块
    BrowserModule
  ],
  providers: [],//定义服务
  bootstrap: [AppComponent] //启动那一个组件
})
export class AppModule { }
