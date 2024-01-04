// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import styles from "./Profile.module.css";
import { string } from "prop-types";
import Button from "../Button/Button";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Profile = (props) => {
  const { profile, altProfile, name, description, phone, email } = props;
  return (
    <>
      <div className={styles.card}>
        <img className={styles.photoProfile} src={profile} alt={altProfile} />
        <h2 className={styles.nome}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.phone}>{phone}</p>
        <p className={styles.email}>{email}</p>
        <Button
          urlrede={"https://github.com/DEVDiegoLima"}
          icon={<FaGithub style={{ color: "black" }} />}
          text={"Github"}
        />
        <Button
          urlrede={"https://www.linkedin.com/in/diego-lima-a3aa81253/"}
          icon={<CiLinkedin style={{ color: "black" }} />}
          text={"LikedIn"}
        />
        <Button
          urlrede={"https://twitter.com/?lang=pt-br"}
          icon={<CiTwitter style={{ color: "black" }} />}
          text={"Twitter"}
        />
      </div>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  profile: string.isRequired,
  altProfile: string.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  phone: string.isRequired,
  email: string.isRequired,
};
