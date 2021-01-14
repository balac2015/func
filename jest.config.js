/**
 * 配置文档
 * https://jestjs.io/docs/zh-Hans/configuration
 */
module.exports = {
    // 生成覆盖率
    "collectCoverage": true,
    "testEnvironment": "node",
    // 报告每个测试的执行情况，显示执行时间
    "verbose": true,
    "testPathIgnorePatterns": [
        "<rootDir>/build/",
        "<rootDir>/node_modules/"
    ]
};
