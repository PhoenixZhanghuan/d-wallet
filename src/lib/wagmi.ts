// 导入 RainbowKit 的默认配置函数
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
// 导入支持的区块链网络：以太坊主网、Polygon 主网和测试网
import { mainnet, polygon, polygonMumbai } from 'wagmi/chains';

/**
 * wagmi 配置
 * 用于设置 Web3 钱包连接的基础配置
 */
export const config = getDefaultConfig({
  // 应用名称，会在钱包连接时显示
  appName: 'DWallet Pro',
  // WalletConnect 项目 ID，用于 WalletConnect 协议
  // 需要在 https://cloud.walletconnect.com/ 获取
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  // 支持的区块链网络列表
  chains: [mainnet, polygon, polygonMumbai],
  // 启用服务端渲染支持
  ssr: true,
});