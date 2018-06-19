import { Component } from '@angular/core';  //引入核心组件


@Component({  //声明使用组件的名称
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//数据
  title = 'app';
  h="你好，我是康旺！";
}
