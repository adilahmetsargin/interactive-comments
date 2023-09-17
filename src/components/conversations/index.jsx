import { Comments } from "../comments";
import { NewCommentSection } from "../new-comment-section";

import Data from "../../../data.json";
import { CommentContextProvider } from "../comments/useComment";
import styles from "./styles.module.scss";
import { useState } from "react";

const ConversationSection = () => {
  const [comments, setComments] = useState(Data.comments);

  const handleNewComment = (newComment) => {
    setComments([
      ...comments,
      {
        id: Math.floor(Math.random() * 100),
        content: newComment,
        createdAt: new Date().toLocaleDateString(),
        score: 0,
        user: Data.currentUser,
      },
    ]);
  };

  return (
    <div className={styles.conversationWrapper}>
      {comments.map((comment) => (
        <CommentContextProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comments />
        </CommentContextProvider>
      ))}
      <NewCommentSection
        onClick={handleNewComment}
        image={Data.currentUser.image.png}
        alt={Data.currentUser.username}
      />
    </div>
  );
};

export { ConversationSection };
