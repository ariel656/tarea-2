import { useState } from "react";
import MusicCard from "../components/MusicCard";

export default function Home() {
  const [songs] = useState([
    {
      title: "Noche Estrellada",
      artist: "Artista A",
      cover: "https://via.placeholder.com/150",
    },
    {
      title: "Amanecer",
      artist: "Artista B",
      cover: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <div className="grid">
      {songs.map((song, index) => (
        <MusicCard key={index} song={song} />
      ))}
    </div>
  );
}
