import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  rootMargin = '50px'
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold, rootMargin });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeInUp':
        return isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0';
      case 'fadeInLeft':
        return isVisible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-8 opacity-0';
      case 'fadeInRight':
        return isVisible 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-8 opacity-0';
      case 'scaleIn':
        return isVisible 
          ? 'scale-100 opacity-100' 
          : 'scale-95 opacity-0';
      case 'slideInUp':
        return isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-16 opacity-0';
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
