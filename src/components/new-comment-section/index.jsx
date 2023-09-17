/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../button";
import { TextArea } from "../textarea";
import styles from "./styles.module.scss";

const NewCommentSection = ({ isReply = false, image, alt, onClick }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = ({ target }) => {
    setComment(target.value);
  };
  const handleClick = () => {
    onClick(comment);
    setComment("");
  };

  return (
    <div className={styles.newCommentSection}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>
      <TextArea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Add a comment."
      />
      <Button variant="primary" onClick={handleClick}>
        {isReply ? "Reply" : "Send"}
      </Button>
    </div>
  );
};

export { NewCommentSection };
