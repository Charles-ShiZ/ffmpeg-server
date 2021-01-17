# 怎么使用

1. 准备环境：
node版本8.0.0到10.12.0之间

2. 安装DataV-cli：
> npm install --registry=https://registry.npm.taobao.org datav-cli -g

3. 检测是否安装：
> datav --version

4. 登录
> datav login
用户名：[一定要是主账号]
开发者识别码：[DataV-Web -> 我的组件包 ->开发者识别码]

5. 生成组件包
> datav init

6. 启动组件
> datav run

7. 发布组件到对应账号（注意：package.json中的name属性的格式为：@组件包名/组件名，账号中必须存在该组件包）
> datav publish
