import "./App.css";
import Profile from "./components/Profile/Profile";
import ProfileImage from "./assets/profile.jpg";

function App() {
  return (
    <>
      <Profile
        profile={ProfileImage}
        altProfile="Foto do Satoro Gojo"
        name="Satoro Gojo"
        description="Satoro Gojo, um dos feiticeiros mais fortes de Jujutsu Kaisen."
        phone="+5511987654321"
        email="satorogojo@gmail.com"
      />
    </>
  );
}

export default App;
