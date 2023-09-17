import { useState } from "react";
import { useComment } from "../useComment";
import styles from "./styles.module.scss";
import { TextArea } from "../../textarea";
import { Button } from "../../button";

const Content = () => {
  const {
    handleUpdate,
    isEditting,
    comment: { content, replyingTo },
  } = useComment();

  const [comment, setComment] = useState(content);

  const handleCommentChange = ({ target }) => {
    setComment(target.value);
  };

  return (
    <div>
      {isEditting ? (
        <>
          <TextArea value={comment} onChange={handleCommentChange} />
          <Button
            onClick={() => handleUpdate(comment)}
            className={styles.updateButton}
            variant="primary"
          >
            Update
          </Button>
        </>
      ) : (
        <p className={styles.content}>
          {replyingTo && (
            <span className={styles.replyingTo}>@{replyingTo}&nbsp;</span>
          )}
          {content}
        </p>
      )}
    </div>
  );
};

export { Content };
