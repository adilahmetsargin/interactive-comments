import { Button } from "../../button";
import { useComment } from "../useComment";
import styles from "./styles.module.scss";

const Header = () => {
  const {
    handleEdit,
    handleDelete,
    handleReply,
    currentUser,
    comment: {
      createdAt,
      user: { image, username },
    },
  } = useComment();

  const ownedByCurrentUser = currentUser.username === username;
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.imageWrapper}>
        <img src={image.png} alt={username} />
      </div>
      <h3 className={styles.username}>{username}</h3>
      {ownedByCurrentUser && <span className={styles.youIndicator}>you</span>}
      <div className={styles.createdAt}>{createdAt}</div>
      <div className={styles.actionsButtons}>
        {ownedByCurrentUser ? (
          <>
            <Button variant="warning" onClick={handleDelete}>
              <img src="./images/icon-delete.svg" alt="" aria-hidden="true" />
              Delete
            </Button>
            <Button onClick={handleEdit}>
              <img src="./images/icon-edit.svg" alt="" aria-hidden="true" />
              Edit
            </Button>
          </>
        ) : (
          <Button onClick={handleReply}>
            <img src="./images/icon-reply.svg" alt="" aria-hidden="true" />
            Reply
          </Button>
        )}
      </div>
    </div>
  );
};

export { Header };
