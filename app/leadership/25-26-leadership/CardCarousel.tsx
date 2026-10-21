import { Children, ReactNode } from "react";
import "./styles.css";

interface CardCarousel {
  children?: ReactNode;
}

/* 
 * This is the container for the director cards
 * There must be a minimum number of cards for the carousel feature to activate
 */
export default function CardCarousel({ children }: CardCarousel) {
  const MINIMUM_CARDS = 4;

  const CARD_WIDTH = 300;
  const GAP = 10;
  const PX_PER_SECOND = 80;
  const numCards = Children.count(children);
  const sufficientCards = numCards > MINIMUM_CARDS;
  const totalWidth = numCards * (CARD_WIDTH + GAP);
  const animationTime = totalWidth / PX_PER_SECOND;
  return (
    <>
    {sufficientCards ?
      <div className="card-carousel animate-carousel">
        <div className="card-carousel-group animate-carousel-group" style={{ animationDuration: `${animationTime}s` }}>
          {children}
        </div>
        <div aria-hidden className="card-carousel-group animate-carousel-group" style={{ animationDuration: `${animationTime}s` }}>
          {children}
        </div>
      </div>
    :
      <div className="card-carousel">
        <div className="card-carousel-group">
          {children}
        </div>
      </div>
    }
    </>
  );
}