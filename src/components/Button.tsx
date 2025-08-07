import { VNode } from "preact";

export interface ButtonProps {
  children: VNode | string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  className = ''
}: ButtonProps): VNode => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#1890ff',
          color: 'white'
        };
      case 'secondary':
        return {
          backgroundColor: '#f0f0f0',
          color: '#333'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: '#1890ff',
          border: '1px solid #1890ff'
        };
      default:
        return {
          backgroundColor: '#1890ff',
          color: 'white'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '4px 8px',
          fontSize: '12px'
        };
      case 'large':
        return {
          padding: '12px 24px',
          fontSize: '16px'
        };
      default:
        return {
          padding: '8px 16px',
          fontSize: '14px'
        };
    }
  };

  const styles = {
    border: 'none',
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.6 : 1,
    ...getVariantStyles(),
    ...getSizeStyles()
  };

  return (
    <button 
      style={styles}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children || "Click me"}
    </button>
  );
};

export default Button; 