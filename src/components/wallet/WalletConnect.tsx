'use client';

// 导入 RainbowKit 的连接按钮组件
import { ConnectButton } from '@rainbow-me/rainbowkit';
// 导入 wagmi hooks：账户信息、断开连接、签名消息
import { useAccount, useDisconnect, useSignMessage } from 'wagmi';
import { useState } from 'react';
// 导入自定义按钮组件
import { Button } from '@/components/ui/Button';

/**
 * 钱包连接组件
 * 提供钱包连接、断开连接和 SiWE（Sign-in with Ethereum）登录功能
 */
export function WalletConnect() {
  // 获取当前账户信息：地址、连接状态、当前链
  const { address, isConnected, chain } = useAccount();
  // 获取断开连接函数
  const { disconnect } = useDisconnect();
  // 获取签名消息函数
  const { signMessage } = useSignMessage();
  
  // 本地状态：是否已通过签名登录
  const [isSignedIn, setIsSignedIn] = useState(false);
  // 本地状态：是否正在签名中
  const [isLoading, setIsLoading] = useState(false);

  /**
   * 处理 SiWE 登录
   * 生成签名消息并请求用户签名以完成身份验证
   */
  const handleSignIn = async () => {
    // 如果没有连接地址，直接返回
    if (!address) return;
    
    setIsLoading(true);
    try {
      // 构造符合 SiWE 标准的签名消息
      const message = `Welcome to DWallet Pro!\n\nSign this message to authenticate with your wallet.\n\nWallet: ${address}\nTimestamp: ${new Date().toISOString()}`;
      
      // 请求用户签名
      await signMessage({ message });
      // 签名成功，设置为已登录状态
      setIsSignedIn(true);
      
      // TODO: 这里可以添加后端验证逻辑
      // 将签名发送到后端验证，并获取 JWT token 或设置 session
      console.log('User signed in successfully');
    } catch (error) {
      // 签名失败（用户拒绝或其他错误）
      console.error('Sign in failed:', error);
    } finally {
      // 无论成功失败都要重置加载状态
      setIsLoading(false);
    }
  };

  /**
   * 处理登出
   * 清除登录状态并断开钱包连接
   */
  const handleSignOut = () => {
    setIsSignedIn(false);
    disconnect();
  };

  // 如果钱包未连接，显示连接提示和连接按钮
  if (!isConnected) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Connect Your Wallet</h2>
        <p className="text-gray-600 text-center max-w-md">
          Connect your wallet to access DWallet Pro features including multi-chain asset management and NFT portfolio.
        </p>
        {/* RainbowKit 提供的连接按钮，支持多种钱包 */}
        <ConnectButton />
      </div>
    );
  }

  // 钱包已连接，显示账户信息和登录/登出按钮
  return (
    <div className="flex flex-col items-center gap-4">
      {/* 账户信息卡片 */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Wallet Connected</h3>
        <div className="space-y-2 text-sm">
          {/* 显示钱包地址 */}
          <p><span className="font-medium">Address:</span> {address}</p>
          {/* 显示当前网络 */}
          <p><span className="font-medium">Network:</span> {chain?.name}</p>
          {/* 显示认证状态 */}
          <p><span className="font-medium">Status:</span> 
            <span className={`ml-2 px-2 py-1 rounded text-xs ${
              isSignedIn ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {isSignedIn ? 'Authenticated' : 'Not Authenticated'}
            </span>
          </p>
        </div>
      </div>
      
      {/* 操作按钮区域 */}
      <div className="flex gap-3">
        {/* 根据登录状态显示不同按钮 */}
        {!isSignedIn ? (
          // 未登录：显示 SiWE 登录按钮
          <Button 
            onClick={handleSignIn} 
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isLoading ? 'Signing...' : 'Sign In with Ethereum'}
          </Button>
        ) : (
          // 已登录：显示登出按钮
          <Button 
            onClick={handleSignOut}
            variant="outline"
          >
            Sign Out
          </Button>
        )}
        {/* RainbowKit 连接按钮，用于切换钱包或网络 */}
        <ConnectButton />
      </div>
    </div>
  );
}