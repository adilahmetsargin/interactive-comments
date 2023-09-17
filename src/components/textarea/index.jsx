import styles from "./styles.module.scss";

const TextArea = ({ ...props }) => {
  return (
    <textarea
      className={styles.textArea}
      {...props}
      cols="30"
      rows="4"
    ></textarea>
  );
};

export { TextArea };
