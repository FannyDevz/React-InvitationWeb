import { useRef, useEffect } from "react";

import Hero from "./hero";
import Quote from "./quote";
import Info from "./info";
import Story from "./story";
import Events from "./events";
import ReservationForm from "./reservation-form";
import CovidProtocols from "./covid-protocols";
import LiveVideo from "./live-video";
import Gift from "./gift";
import Gallery from "./gallery";
import MessageForm from "./message-form";
import Footer from "./footer";

function InvitationDetail({ opened }) {
  const audioElRef = useRef(null);

  useEffect(() => {
    if (opened) {
      audioElRef.current.play();
    }
  }, [opened]);

  return (
    <main className="flex-shrink-0 w-full max-w-[500px] lg:w-[500px] shadow-2xl">
      <audio ref={audioElRef} loop className="hidden">
        <source src="/assets/music/bg-sound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Hero />
      <Quote />
      <Info />
      <Story />
      <Events />
      <ReservationForm />
      <CovidProtocols />
      <LiveVideo />
      <Gift />
      <Gallery />
      <MessageForm />
      <Footer />
    </main>
  );
}

export default InvitationDetail;
