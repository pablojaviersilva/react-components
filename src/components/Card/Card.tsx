import CardRoot from "./Card.styles";
import { CardProps } from "./Card.types";
import clsx from "clsx";

export function Card({ className, children, ...restProps }: CardProps): JSX.Element {
    return (
        <CardRoot className={clsx("Card", className)} {...restProps}>
            {children}
        </CardRoot>
    );
}
export default Card;
