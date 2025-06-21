// 导入 clsx 用于条件性地组合 CSS 类名
import { clsx, type ClassValue } from 'clsx';

/**
 * 类名合并工具函数
 * 使用 clsx 合并多个类名，支持条件类名
 * @param inputs - 类名数组，可以是字符串、对象或数组
 * @returns 合并后的类名字符串
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * 格式化钱包地址
 * 将长地址缩短为 "0x1234...5678" 的格式
 * @param address - 完整的钱包地址
 * @param chars - 显示的字符数（默认 4）
 * @returns 格式化后的地址字符串
 */
export function formatAddress(address: string, chars = 4): string {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

/**
 * 格式化代币余额
 * 将 wei 单位的余额转换为可读的小数格式
 * @param balance - 余额字符串（wei 单位）
 * @param decimals - 代币精度（默认 18）
 * @param precision - 显示精度（默认 4 位小数）
 * @returns 格式化后的余额字符串
 */
export function formatBalance(balance: string, decimals = 18, precision = 4): string {
  // 将 wei 转换为标准单位
  const num = parseFloat(balance) / Math.pow(10, decimals);
  // 保留指定位数的小数
  return num.toFixed(precision);
}