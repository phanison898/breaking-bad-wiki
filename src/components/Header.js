import React, { useState } from "react";
import "../style.css";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import bb_music from "../assets/bb_music.mp3";

const Header = () => {
  const [mute, setMute] = useState(false);

  return (
    <div className="header">
      <div className="heading">Breaking Bad Wiki</div>
      <audio loop autoPlay muted={mute}>
        <source src={bb_music} type="audio/mp3" />
      </audio>
      <div className="nav-bar">
        {mute ? (
          <VolumeOffIcon onClick={() => setMute(false)} />
        ) : (
          <VolumeUpIcon onClick={() => setMute(true)} />
        )}
      </div>
    </div>
  );
};

export default Header;
