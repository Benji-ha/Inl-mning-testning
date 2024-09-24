
interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
  if (!audioUrl) return null;

  return (
    <audio controls>
      <source src={audioUrl} type="audio/mpeg" aria-label="Play-pronunciation" />
    </audio>
  );
};

export default AudioPlayer;