# Telegram推送Bot的Chrome插件

Chrome的Telegram Bot推送插件

> 需搭配在 Telegram 中创建的 [Bot](https://app.yinxiang.com/shard/s3/nl/1074019/5d44991d-ce9f-457e-b260-965d554b0972?title=Telegram%20Bot%20Send%20Message) 使用

## 插件安装

1. 下载本仓库到本地，解压
2. 进入Chrome浏览器，在地址栏输入``chrome://extensions``

    ![](https://github.com/axelburks/tg_notification_chrome/blob/master/images/usage1.png?raw=true)
3. 打开``开发者模式``

    ![](https://github.com/axelburks/tg_notification_chrome/blob/master/images/usage2.png?raw=true)
4. 选择``打包拓展程序``，选择仓库下``TG Notification Bot``目录，点击``打包拓展程序``按钮，获得 crx 和 pem 文件

    ![](https://github.com/axelburks/tg_notification_chrome/blob/master/images/usage3.png?raw=true)
5. 将 crx 文件拖入``chrome://extensions``页面进行安装，并复制其 ID 备用
6. 按"Win+R"系统热键打开"运行"窗口，输入gpedit.msc后回车，依次展开"计算机配置"->"管理模板"，右键菜单选择"添加/删除模板(A)..."。在"添加/删除模板"窗口中点"添加"，加入上面步骤中下载的Chrome.adm文件，安装完成后会出现"经典管理模板(ADM)"的选项
7. 依次展开"经典管理模板(ADM)"->Google->Google Chrome，选择"扩展程序"，双击右侧的"配置扩展程序安装白名单"
8. 在"配置扩展程序安装白名单"窗口，按下图描述添加步骤5中看到的插件 ID

    ![](https://github.com/axelburks/tg_notification_chrome/blob/master/images/usage4.png?raw=true)

## 插件使用

### 选项设置

1. ``右键点击``插件图标，进入``选项``

    ![](https://github.com/axelburks/tg_notification_chrome/blob/master/images/usage5.png?raw=true)
2. 将 Bot 消息发送链接和 ChatID 填入，保存

    链接：https://api.telegram.org/bot$TOKEN/sendMessage

    Chat ID：

    a. 任意向刚刚创建的机器人发送一条消息

    b. 现在机器人那儿已经排列了你刚刚发送的消息更新，利用 Telegram bot API 的 getupdates 就可以让机器人得到刚刚聊天的详细内容和 Chat ID。

    在浏览器地址栏输入 HTTP GET request 的 URL：

    https://api.telegram.org/bot$TOKEN/getUpdates

    把其中的 $TOKEN 替换成自己创建的机器人的 token。

    c. 找到自己和机器人聊天的 Chat ID。如果所有操作正确，上一步在浏览器输入 URL 跳转后，得到的结果中，

    "result"->"message"->"chat"->"id":12345 里面的 12345 便是你和机器人聊天的 Chat ID。
    
    ![](https://github.com/axelburks/tg_notification_chrome/blob/master/images/usage6.png?raw=true)

### 推送方法

- 推送当前页面：``点击``插件图标
- 推送页面图片、链接及选中文字：在需要推送的内容上点击右键，选择``推送到Telegram``

    ![](https://github.com/axelburks/tg_notification_chrome/blob/master/images/usage7.png?raw=true)