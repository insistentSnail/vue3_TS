# Vue3+TS项目搭建规范

## 一、vue-cli 搭建项目

```
vue create 项目名称
```

## 二、代码规范

```
1、新建 .editorconfig 文件有助于在不同编辑器或者不同操作系统进行统一规范。（需要先安装EditorConfig for VSCode插件vscode才会读取这个文件）
2、使用prettier（
可以在vscode里面安装prettier插件使用；
当没有安装插件时，或者用其他编辑器时，安装依赖进行使用，npm i prettier -D;
)、   
新建.prettierrc文件编辑格式化规则、
新建.prettierignore忽略文件、
新增命令"prettier": "prettier --write ."，一次性格式化所有文件、
prettier会与eslint规则相互冲突，解决冲突方法：
npm i eslint-plugin-prettier eslint-config-prettier -D 脚手架选择eslint-prettier默认安装了这两个依赖
在eslintrc.js中添加'plugin:prettier/recommended'
3、git commit前对代码进行eslint校验：
npx husky-init && npm install 会生成.husky文件和prepare命令
修改pre-commit文件 npm run lint
```

