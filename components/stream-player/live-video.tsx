"use client";

import { useRef, useState, useEffect } from "react";
import { Participant, Track } from "livekit-client";
import { useTracks } from "@livekit/components-react";

import { VolumeControl } from "./volume-control";
import { FullscreenControl } from "./fullscreen-control";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo = ({ participant }: LiveVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
 const [volume, setVolume] = useState(0);


  //  Volume change
  const onVolumeChange = (value: number) => {
    setVolume(value);

    if (videoRef.current) {
      videoRef.current.muted = value === 0;
      videoRef.current.volume = value * 0.01;
    }
  };

  //  Toggle mute
  const toggleMute = () => {
    const isMuted = volume === 0;

    const newVolume = isMuted ? 50 : 0;
    setVolume(newVolume);

    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      videoRef.current.volume = isMuted ? 0.5 : 0;
    }
  };

  //  Default volume = muted

useEffect(() => {
  if (!videoRef.current) return;

  videoRef.current.muted = volume === 0;
  videoRef.current.volume = volume * 0.01;
}, [volume]);

  // 🖥️ Fullscreen toggle
  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (wrapperRef.current) {
      wrapperRef.current.requestFullscreen();
    }
  };

  //  Fullscreen listener (FIXED)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // 🎥 LiveKit tracks handling (FIXED)
  const tracks = useTracks([
    Track.Source.Camera,
    Track.Source.Microphone,
  ]);

  useEffect(() => {
    const participantTracks = tracks.filter(
      (track) => track.participant.identity === participant.identity
    );

    participantTracks.forEach((track) => {
      if (videoRef.current) {
        track.publication.track?.attach(videoRef.current);
      }
    });

    // cleanup (VERY IMPORTANT)
    return () => {
      participantTracks.forEach((track) => {
        track.publication.track?.detach();
      });
    };
  }, [tracks, participant.identity]);

  return (
    <div ref={wrapperRef} className="relative h-full flex">
      <video ref={videoRef} width="100%" />

      {/* Controls Overlay */}
      <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 flex h-14 w-full items-center justify-between bg-linear-to-r from-neutral-900 px-4">
          <VolumeControl
            onChange={onVolumeChange}
            value={volume}
            onToggle={toggleMute}
          />

          <FullscreenControl
            isFullscreen={isFullscreen}
            onToggle={toggleFullscreen}
          />
        </div>
      </div>
    </div>
  );
};