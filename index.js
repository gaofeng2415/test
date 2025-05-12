#!/usr/bin/env node

/**
 * 基础 CLI 工具示例
 * 支持通过命令行输入参数并输出结果
 */

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('请提供一些数字作为参数，例如:');
  console.log('node index.js 1 2 3 4');
  process.exit(1);
}

// 尝试将所有参数转换为数字
const numbers = args.map(Number);

// 检查是否有无效的数字
if (numbers.some(isNaN)) {
  console.error('所有参数必须是数字。');
  process.exit(1);
}

// 计算总和
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(`数字的和是: ${sum}`);