'use client';

// 导入 React Query 相关组件，用于状态管理和缓存
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// 导入 wagmi Provider，提供 Web3 功能
import { WagmiProvider } from 'wagmi';
// 导入 RainbowKit Provider 和深色主题
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
// 导入 wagmi 配置
import { config } from '@/lib/wagmi';
import { useState } from 'react';

/**
 * 全局 Providers 组件
 * 为整个应用提供 Web3 功能、状态管理和 UI 主题
 * @param children - 子组件
 */
export function Providers({ children }: { children: React.ReactNode }) {
  // 创建 QueryClient 实例，用于管理服务器状态
  const [queryClient] = useState(() => new QueryClient());

  return (
    // wagmi Provider：提供 Web3 钱包连接和区块链交互功能
    <WagmiProvider config={config}>
      {/* React Query Provider：提供数据获取、缓存和同步功能 */}
      <QueryClientProvider client={queryClient}>
        {/* RainbowKit Provider：提供钱包连接 UI 和主题 */}
        <RainbowKitProvider
          theme={darkTheme({
            // 主题色：紫色
            accentColor: '#7b3cf0',
            // 主题色前景色：白色
            accentColorForeground: 'white',
            // 圆角样式：中等
            borderRadius: 'medium',
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}