/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import { clsx } from "clsx";

const Button = ({ variant = "ghost", children, className, ...props }) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
