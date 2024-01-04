import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ urlrede, text, icon }) => {
  return (
    <>
      <a
        href={urlrede}
        className={styles.btnPrimary}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon} {text}
      </a>
    </>
  );
};

Button.propTypes = {
  urlrede: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Button;
