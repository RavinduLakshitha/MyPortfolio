import "./profile.css";
import ravindu from "../../../src/images/ravindu.png"; // Correct import

const Profile = () => {
  return (
    <>
      <section className="profilebox">
        <div className="box">
          <img src={ravindu} alt="Ravindu Lakshitha" />
          <h1 className="content">Hi, I&apos;m Ravindu Lakshitha👋</h1>
          <h2 className="intro">
          I&apos;m a full stack developer with experience in building
            web applications using Java, React, Node.js, and other brmodern
            technologies.I&apos;m currently looking for
            new opportunities, so feel free to reach out!
          </h2>
        </div>
      </section>
    </>
  );
};

export default Profile;
