// Styles
import styles from "./index.module.scss";

type Props = {
  message: string;
};

function Message({ message }: Props) {
  return <div className={styles.container}>{message}</div>;
}

export default Message;
