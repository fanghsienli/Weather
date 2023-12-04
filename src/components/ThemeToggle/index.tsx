// Hooks
import { useId } from "react";

// Styles
import styles from "./index.module.scss";

type Props = {
  defaultValue: boolean;
  onChange: ({ checked }: { checked: boolean }) => void;
};

function ThemeToggle({ defaultValue, onChange }: Props) {
  const id = useId();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ checked: event.target.checked });
  };

  return (
    <>
      <input
        id={id}
        type="checkbox"
        className={styles.checkbox}
        defaultChecked={defaultValue}
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor={id}>
        <span>🔆</span>
        <span>🌙</span>
        <div className={styles.ball}></div>
      </label>
    </>
  );
}

export default ThemeToggle;
