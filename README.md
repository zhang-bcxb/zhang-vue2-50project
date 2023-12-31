# vue2-50project

## 项目说明

- 本项目用到的技术：Vue2
- 本项目使用的开发工具：WebStorm
- 本项目是按照下面的项目进行改造的【50-Case-Studies】

[![](https://github-readme-stats.vercel.app/api/pin/?username=zhang-bcxb&repo=50-Case-Studies&show_icons=true&bg_color=30,e96443,904e95&title_color=fff&text_color=fff&icon_color=fff)](https://github.com/zhang-bcxb/50-Case-Studies)

## 项目运行相关

- 运行命令 

```
克隆项目：git clone https://github.com/zhang-bcxb/zhang-vue2-50project.git
安装依赖：npm install
运行项目：npm run serve
打包项目：npm run build
```

- 项目相关的 CDN

```
<!-- 导入图标【https://fa5.dashgame.com/#/图标】 -->
<link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet">
<!-- 功能类优先的 CSS 框架【案例39】【https://www.tailwindcss.cn/】 -->
<!-- 不要全局导入，容易影响别的项目样式 -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- 对话框【https://sweetalert2.github.io/】 -->
<script src="https://cdn.bootcss.com/limonte-sweetalert2/7.21.1/sweetalert2.all.min.js"></script>
<!-- MD文本转 HTML【案例33】【https://marked.js.org/】 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.2/marked.min.js"></script>
```

- 项目相关的接口

```
随机笑话：
https://icanhazdadjoke.com
口袋妖怪：
https://pokeapi.co/api/v2/pokemon/${id}
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
电影界面：
https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1
https://image.tmdb.org/t/p/w1280
https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query={查询参数}
GitHub：
https://api.github.com/users/{用户名称}
https://api.github.com/users/{用户名称}/repos?sort=created
在线搜索用户：
https://randomuser.me/api?results={结果数量}
随机图片：
https://source.unsplash.com/random/310x310
<img src="https://picsum.photos/1920/1080?random=1" />
```

## 项目开发说明

- 创建项目截图

![创建项目](doc/创建项目.png)

- WebStorm 运行配置

![运行配置](doc/运行配置.png)
![运行效果](doc/控制台运行效果.png)

## 项目运行效果

- 项目首页截图

![项目首页](doc/项目首页.png)

- 左侧导航栏

![左侧导航栏](doc/左侧导航栏1.png)
![左侧导航栏](doc/左侧导航栏2.png)
