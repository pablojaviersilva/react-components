import { forwardRef } from 'react';
import StyledCard from './card.styles';
import { CardProps } from './card.props';


const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className,
  expand,
  scrollX = 'hidden',
  scrollY = 'hidden',
  dataQaElement,
  style,
}, ref) => {
  return (
    <StyledCard
      ref={ref}
      data-qa-element-name={dataQaElement}
      className={className}
      scrollX={scrollX}
      scrollY={scrollY}
      expand={expand}
      style={style}
    >
      {children}
    </StyledCard>
  );
});

Card.displayName = 'Card';

export default Card;
