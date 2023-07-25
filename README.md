myy-admin-vue3
[vue3](https://cn.vuejs.org/guide/introduction.html)+[arco-design-pro](vue3+arco-design-pro(https://arco.design/vue/docs/pro/start))

## UI问题 
```
项目内置arco-design
```

### 注意事项 🌰
```
1.移除in18相关配置
2.对路由和权限系统的重写(路由与菜单, 权限控制)
3.git提交信息请参考规范
```

### 路由与菜单 🌰

```
参考https://arco.design/vue/docs/pro/routes-and-menu

定制化配置

路由 Meta 元信息
移除 locale(因为移除了in18所以不需要该配置) 菜单名将从后台配置中读取
移除 roles 权限相关将从后台配置中读取
```

### 权限控制 🌰

```
参考https://arco.design/vue/docs/pro/permission

权限控制

某按钮权限管理
对v-permission进行重构
<button v-permission="{ name: '路由名称', code: '权限名称如(query)' }">查询</button>

路由权限管理
已经集成交由后台配置信息控制
```

### Mq组件相关 

```
mqTable
mqSelect
mqModal
mqContainer
mqAdvanceQuery

后期考虑组件库方便多项目公共组件
```

### git commit 规范

commitlint 的默认格式为：

```shell
# 注意：冒号前面是需要一个空格的, 带 ？ 表示非必填信息
type(scope?): subject
body?
footer?
```

- scope 指 commit 的范围（哪些模块进行了修改）

- subject 指 commit 的简短描述

- body 指 commit 主体内容（长描述）

- footer 指 commit footer 信息

- type 指当前 commit 类型，一般有下面几种可选类型：

| **类型**   | **描述**                                                  |
|----------|---------------------------------------------------------|
| build    | 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交           |
| ci       | 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交 |
| docs     | 文档更新                                                    |
| feat     | 新增功能                                                    |
| merge    | 分支合并 Merge branch ? of ?                                |
| fix      | bug 修复                                                  |
| perf     | 性能, 体验优化                                                |
| refactor | 重构代码(既没有新增功能，也没有修复 bug)                                 |
| style    | 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)             |
| test     | 新增测试用例或是更新现有测试                                          |
| revert   | 回滚某个更早之前的提交                                             |
| chore    | 不属于以上类型的其他类型                                            |

  
