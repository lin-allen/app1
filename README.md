# jhipster-app1

这个应用程序是使用JHipster 5.8.2生成的，您可以在[https://www.jhipster.tech/document-archive/v5.8.2](https://www.jhipster.tech/document-archive/v5.8.2)上找到文档和帮助。

## Development

在您新建工程之前，您必须在您的电脑上安装和配置以下依赖项:

1.  [Node.js][]: 我们使用Node运行开发web服务器并构建项目。
     推荐安装当前最新的稳定版本10.15.3,下载地址: [http://nodejs.cn/download/](http://nodejs.cn/download/) 或 [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

安装Node之后，你可以通过如下命令安装项目依赖。
您只需要在[package.json](package.json)中的依赖项发生更改时运行此命令。

    npm install

我们使用npm脚本和[Webpack][]构建系统。

分别开启2个命令行窗口，启动后端和前端应用程序，当您的硬盘上的文件发生更改时，浏览器会自动刷新。

    ./mvnw
    npm start

Npm还用于管理此应用程序使用的CSS和JavaScript依赖关系。您可以通过在[package.json](package.json)中指定一个较新的版本来升级依赖关系。
您还可以运行`npm update`和`npm install`来管理依赖项。
在任何命令上添加`help`标志，查看如何使用它。例如， `npm help update`.

`npm run` 命令将列出可用于运行此项目的所有脚本。

### Service workers

默认情况下会注释Service workers，要启用它们，请取消以下代码的注释。

-   在index.html中注册service worker

```html
<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() { console.log('Service Worker Registered'); });
    }
</script>
```

注意: workbox创建各自的service worker，并动态生成 `service-worker.js`

### 管理项目依赖

例如，要添加[Leaflet][]依赖库，可以运行以下命令:

    npm install --save --save-exact leaflet

可以通过添加`--save-dev`(自动安装与开发环境依赖兼容的版本) 参数安装[DefinitelyTyped][] repository的TypeScript类型定义依赖库，您可以运行以下命令:
To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

    npm install --save-dev --save-exact @types/leaflet

然后导入库安装说明中指定的JS和CSS文件，让[Webpack][]知道:
编辑 [src/main/webapp/app/vendor.ts](src/main/webapp/app/vendor.ts) 文件:

```
import 'leaflet/dist/leaflet.js';
```

编辑 [src/main/webapp/content/css/vendor.css](src/main/webapp/content/css/vendor.css) 文件:

```
@import '~leaflet/dist/leaflet.css';
```

注意:还有一些其他关于Leaflet要做的事情，在这里不做详细说明。
有关如何使用JHipster开发的进一步说明，请参阅[Using JHipster in development][]。

### 使用angular-cli

您还可以使用[Angular CLI][] 来生成一些定制的客户端代码。

如下命令:

    ng generate component my-component

将生成如下文件:

    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts

## 应用程序构建(prod)

通过如下命令运行生成环境应用程序app1:

    ./mvnw -Pprod clean package

这将编译生成前端CSS和JavaScript文件，并编译打包后端文件。它还将修改`index.html` 引用这些CSS和JavaScript文件。
为了确保一切正常运行，请运行:

    java -jar target/*.war

然后在浏览器中打开[http://localhost:8080](http://localhost:8080)。

有关详细信息，请参考[Using JHipster in production][]。

## 后端单元测试

要启动应用程序单元测试，请运行:

    ./mvnw clean test

### 前端单元测试

前端单元测试由 [Jest][] 运行，用 [Jasmine][]. 编写。它们位于[src/test/javascript/](src/test/javascript/)中，可以用:

    npm test

有关更多信息，请参考 [Running tests page][].

### 分析代码质量

Sonar用于分析代码质量。您可以使用以下命令启动本地Sonar服务器(可通过http://localhost:9001访问):

```
docker-compose -f src/main/docker/sonar.yml up -d
```

然后，进行代码质量分析:

```
./mvnw -Pprod clean test sonar:sonar
```

有关更多信息，请参考  [Code quality page][].

## 使用Docker简化开发(可选)

您可以使用Docker来改进您的JHipster开发体验。在 [src/main/docker](src/main/docker) 文件夹中可以使用一些docker-compose配置来加载所需的第三方服务。

例如，要在docker容器中启动mysql数据库，请运行:

    docker-compose -f src/main/docker/mysql.yml up -d

要停止并删除容器，请运行:

    docker-compose -f src/main/docker/mysql.yml down

您还可以完全docker化您的应用程序和它所依赖的所有服务。
首先运行如下命令将您的应用程序打包成docker镜像:

    ./mvnw package -Pprod verify jib:dockerBuild

然后运行:

    docker-compose -f src/main/docker/app.yml up -d

有关更多信息，请参考 [Using Docker and Docker-Compose][]，此页面还包含关于docker-compose子生成器(`jhipster docker-compose`)的信息，该生成器能够为一个或多个jhipster应用程序生成Docker配置。

## 持续集成(可选)

要为您的项目配置CI，请运行ci-cd子生成器 (`jhipster ci-cd`)，这将为您为生成一些持续集成系统配置文件。有关更多信息，请参考 [Setting up Continuous Integration][]页。
To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[jhipster homepage and latest documentation]: https://www.jhipster.tech
[jhipster 5.8.2 archive]: https://www.jhipster.tech/documentation-archive/v5.8.2
[using jhipster in development]: https://www.jhipster.tech/documentation-archive/v5.8.2/development/
[using docker and docker-compose]: https://www.jhipster.tech/documentation-archive/v5.8.2/docker-compose
[using jhipster in production]: https://www.jhipster.tech/documentation-archive/v5.8.2/production/
[running tests page]: https://www.jhipster.tech/documentation-archive/v5.8.2/running-tests/
[code quality page]: https://www.jhipster.tech/documentation-archive/v5.8.2/code-quality/
[setting up continuous integration]: https://www.jhipster.tech/documentation-archive/v5.8.2/setting-up-ci/
[node.js]: https://nodejs.org/
[yarn]: https://yarnpkg.org/
[webpack]: https://webpack.github.io/
[angular cli]: https://cli.angular.io/
[browsersync]: http://www.browsersync.io/
[jest]: https://facebook.github.io/jest/
[jasmine]: http://jasmine.github.io/2.0/introduction.html
[protractor]: https://angular.github.io/protractor/
[leaflet]: http://leafletjs.com/
[definitelytyped]: http://definitelytyped.org/
