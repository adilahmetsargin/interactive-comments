import { Button } from "../../button";
import { useComment } from "../useComment";
import styles from "./styles.module.scss";

const Reactions = () => {
  const {
    onPlus,
    onMinus,
    comment: { score },
  } = useComment();
  return (
    <div className={styles.reactionsWrapper}>
      <Button onClick={onPlus} aria-labelledby="Positive reaction button">
        <img src="./images/icon-plus.svg" alt="plus-icon" aria-hidden="true" />
      </Button>
      <p>{score}</p>
      <Button onClick={onMinus} aria-labelledby="Negative reaction button">
        <img
          src="./images/icon-minus.svg"
          alt="minus-icon"
          aria-hidden="true"
        />
      </Button>
    </div>
  );
};

export { Reactions };
