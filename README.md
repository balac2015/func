# func
常用代码片段集合

## 使用 Usage

```bash
npm install func
```

```javascript
import { isNumber }, func from 'func'
isNumber(5e3)   //true
func.isNumber(5e3) // true
```

## 开发

- 使用规范的jsdoc注释
- 新增方法需要完整的测试用例

```bash
# 生成文档
$ npm run docs
# 执行测试
$ npm run test
# 打包构建
$ npm run build
```

依赖模块：
- @babel
- docdash
- jest
- minami
- rollup-plugin-babel
- rollup-plugin-node-resolve
- rollup-plugin-uglify

参考：
[utility](https://github.com/node-modules/utility)