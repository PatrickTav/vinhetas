import { useState, useRef, useEffect } from "react";
import Button from "../../components/Button/Button";
import "./Home.css";

// Audios exportados
import { audios } from "../../features/Audios";

const Home = () => {
  const [stateSong, setStateSong] = useState();
  const song = useRef();

  const handleSong = (string) => {
    const actualSong = audios[string];
    setStateSong(actualSong);
  };

  useEffect(() => {
    const playerSong = async () => {
      await song.current.play();
    };
    playerSong();
  }, [stateSong]);

  return (
    <div className="home-container">
      <p>Aperte para escutar uma vinheta</p>
      <audio src={stateSong} ref={song}></audio>
      <div className="audio-container">
        <Button onClick={() => handleSong("uuuui")} />
        <Button onClick={() => handleSong("eleGosta")} />
        <Button onClick={() => handleSong("cavalo")} />
        <Button onClick={() => handleSong("tomi")} />
        <Button onClick={() => handleSong("calma")} />
        <Button onClick={() => handleSong("atumalaca")} />
        <Button onClick={() => handleSong("chega")} />
        <Button onClick={() => handleSong("nao")} />
        <Button onClick={() => handleSong("demais")} />
        <Button onClick={() => handleSong("pare")} />
        <Button onClick={() => handleSong("ai")} />
        <Button onClick={() => handleSong("tapa")} />
      </div>
    </div>
  );
};

export default Home;
