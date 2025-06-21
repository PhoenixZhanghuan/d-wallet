import { WalletConnect } from '@/components/wallet/WalletConnect';
import { Wallet, Shield, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            DWallet Pro
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional Web3 wallet with multi-chain support, asset management, and NFT portfolio
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <Wallet className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Multi-Chain Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect to Ethereum, Polygon, and other popular networks
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Authentication</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sign-in with Ethereum (SiWE) for secure wallet authentication
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <Layers className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Asset Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              View and manage your tokens, NFTs, and transaction history
            </p>
          </div>
        </div>

        {/* Wallet Connection */}
        <div className="max-w-md mx-auto">
          <WalletConnect />
        </div>
      </div>
    </div>
  );
}
