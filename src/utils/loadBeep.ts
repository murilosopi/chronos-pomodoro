import gravitationalBeep from "../assets/audios/gravitational_beep.mp3";

export const loadBeep = () => {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play();
  };
};
