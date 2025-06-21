// 导入 class-variance-authority，用于创建可变样式组件
import { cva, type VariantProps } from 'class-variance-authority';
// 导入工具函数
import { cn } from '../../lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

/**
 * 按钮样式变体配置
 * 使用 cva 创建具有多种变体的按钮样式
 */
const buttonVariants = cva(
  // 基础样式：所有按钮共有的样式
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      // 按钮变体：不同的视觉风格
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      // 按钮尺寸：不同的大小
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    // 默认变体
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/**
 * 按钮组件属性接口
 * 继承原生 button 属性并添加变体属性
 */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

/**
 * 可复用的按钮组件
 * 支持多种样式变体和尺寸，使用 forwardRef 支持 ref 传递
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        // 合并样式：基础样式 + 变体样式 + 自定义样式
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
// 设置组件显示名称，便于调试
Button.displayName = 'Button';

// 导出按钮组件和样式变体
export { Button, buttonVariants };