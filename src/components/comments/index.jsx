import { NewCommentSection } from "../new-comment-section";
import { Content } from "./content";
import { Header } from "./header";
import { Reactions } from "./reactions";
import styles from "./styles.module.scss";
import { CommentContextProvider, useComment } from "./useComment";

const Comments = () => {
  const { isReplying, currentUser, comment, addNewReply } = useComment();

  if (!comment) {
    return null;
  }
  return (
    <>
      <div className={styles.commentsWrapper}>
        <Reactions />
        <div className={styles.commentContentArea}>
          <Header />
          <Content />
        </div>
      </div>
      {comment?.replies?.length > 0 && (
        <div className={styles.replies}>
          {comment?.replies.map((reply) => (
            <CommentContextProvider
              key={reply.id}
              data={{ comment: reply, currentUser }}
            >
              <Comments />
            </CommentContextProvider>
          ))}
          {isReplying && (
            <NewCommentSection
              onClick={addNewReply}
              isReply
              image={currentUser.image.png}
              alt={currentUser.username}
            />
          )}
        </div>
      )}
    </>
  );
};

export { Comments };
