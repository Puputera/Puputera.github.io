import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Resume from "../components/resume/Resume";
import Sertif from "../components/sertif/Sertif";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="pt-30">
        <Resume />
      </div>
      <div className="blog-background">
        <Sertif />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
