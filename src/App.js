import "./App.css";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import Albums from "./pages/Albums/Albums";
import Photos from "./pages/Photos/Photos";
import Tweets from "./pages/Tweets/Tweets";
import NewTweet from "./pages/NewTweet/NewTweet";
import SingleTweet from "./pages/SingleTweet/SingleTweet";

//components
import Menubar from "./components/Menubar/Menubar";

function App() {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums/:userId" element={<Albums />} />
        <Route path="/albums/:albumId/photos" element={<Photos />} />
        <Route path="/tweets/:tweetId" element={<SingleTweet />} />

        <Route path="/tweets" element={<Tweets />} />
        <Route path="/new-tweet" element={<NewTweet />} />
      </Routes>
    </div>
  );
}

export default App;
