import './ShinyText.css';

const ShinyText = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
  color = '#506B5B',
  shineColor = '#DDE4DB',
  spread = 120,
  direction = 'left',
  yoyo = false,
  pauseOnHover = false,
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${pauseOnHover ? 'pause-on-hover' : ''} ${direction === 'right' ? 'direction-right' : ''} ${yoyo ? 'yoyo' : ''} ${className}`}
      style={{
        backgroundImage: `linear-gradient(${direction === 'right' ? '270deg' : '90deg'}, ${color} 0%, ${color} 40%, ${shineColor} 50%, ${color} 60%, ${color} 100%)`,
        backgroundSize: `${spread}% 100%`,
        animationDuration: animationDuration,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
