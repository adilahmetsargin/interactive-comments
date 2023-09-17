/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { useContext, createContext } from "react";

const CommentContext = createContext();

function CommentContextProvider({ children, data }) {
  const [comment, setComment] = useState(data.comment);
  const [isReplying, setReplying] = useState(false);
  const [isEditting, setEditting] = useState(false);

  const handleEdit = () => {
    setEditting(!isEditting);
  };

  const handleReply = () => {
    setReplying(!isReplying);
  };

  const handleDelete = () => {
    setComment(null);
  };

  const handleUpdate = (newComment) => {
    setComment({
      ...comment,
      content: newComment,
    });
    handleEdit();
  };

  const addNewReply = (newComment) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          id: Math.floor(Math.random() * 100),
          content: newComment,
          createdAt: new Date().toLocaleDateString(),
          score: 0,
          replyingTo: comment.user.username,
          user: data.currentUser,
        },
      ],
    });
    handleReply();
  };

  const onPlus = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };
  const onMinus = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };

  const contextData = useMemo(
    () => ({
      onPlus,
      onMinus,
      addNewReply,
      isEditting,
      comment,
      currentUser: data.currentUser,
      isReplying,
      handleReply,
      handleDelete,
      handleEdit,
      handleUpdate,
    }),
    [isReplying, isEditting, comment]
  );

  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
}

function useComment() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("There is no Comment Context Provider, first import it");
  }

  return context;
}

export { useComment, CommentContextProvider };
