import { VNode } from "preact";

export interface CardProps {
  children: VNode | string;
  title?: string;
  subtitle?: string;
  padding?: 'small' | 'medium' | 'large';
  shadow?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
}

const Card = ({ 
  children, 
  title, 
  subtitle, 
  padding = 'medium',
  shadow = 'small',
  className = ''
}: CardProps): VNode => {
  const paddingStyles = {
    small: '8px',
    medium: '16px',
    large: '24px'
  };

  const shadowStyles = {
    none: 'none',
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.15)',
    large: '0 8px 16px rgba(0,0,0,0.2)'
  };

  const cardStyles = {
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e8e8e8',
    padding: paddingStyles[padding],
    boxShadow: shadowStyles[shadow]
  };

  const titleStyles = {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 8px 0',
    color: '#333'
  };

  const subtitleStyles = {
    fontSize: '14px',
    color: '#666',
    margin: '0 0 16px 0'
  };

  return (
    <div style={cardStyles} className={className}>
      {title && <h3 style={titleStyles}>{title}</h3>}
      {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
      {children}
    </div>
  );
};

export default Card; 