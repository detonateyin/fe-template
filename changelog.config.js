/*
 * @Author: xiaoming
 * @Date: 2021-05-06 10:37:33
 * @LastEditors: xiaoming
 * @LastEditTime: 2021-05-07 11:31:27
 * @Description: changelog配置文件
 */
module.exports = {
  disableEmoji: false,
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: 'Chore | 构建/工程依赖/工具',
      emoji: '🤖', // 当前类型的commit所显示的表情
      value: 'chore',
    },
    ci: {
      description: 'CI related changes | CI 配置',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes | 文档',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: 'Features | 新功能',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix | Bug 修复',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'A code change that improves performance | 性能优化',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature | 代码重构',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons... | 风格',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'Adding missing tests | 测试',
      emoji: '💍',
      value: 'test',
    },
  },
};
