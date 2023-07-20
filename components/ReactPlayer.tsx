'use client';

import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { FC, useCallback, useRef, useState } from 'react';

const ImportedReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

type PlayButtonProps = {
  onClick: () => void;
};

const PlayButton: FC<PlayButtonProps> = ({ onClick }) => (
  <button
    className={classNames(
      'absolute w-1/5 transition hover:scale-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    )}
    type="button"
    aria-label="Play Video"
    onClick={onClick}
  >
    <svg className="w-full h-full" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        className="fill-primary group-hover/video:fill-aqua-squeeze"
        cx="61.5"
        cy="61.5"
        r="61.5"
        fillOpacity="0.922864"
      />
      <path
        className="fill-turquoise"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.7064 62.0304L48.7754 81.6468V42.4141L82.7064 62.0304Z"
        stroke="white"
      />
    </svg>
  </button>
);

export const CustomReactPlayer = ({
  url,

  muted,
  loop,
  controls,

  lazyLoad,
}: {
  url: string,

  muted: boolean,
  loop: boolean | undefined,
  controls: boolean,

  lazyLoad: false | {
    placeholderImage: string | undefined,
  },
}) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const onPlay = useCallback(() => {
    setPlaying(true);
  }, []);

  const onPause = useCallback(() => {
    setPlaying(false);
  }, []);

  return (
    <ImportedReactPlayer
      ref={playerRef}
      url={url}
      playing={playing}
      onPause={onPause}
      onPlay={onPlay}
      width="100%"
      height="100%"
      controls={controls}
      muted={muted}
      loop={loop}
      style={{ position: 'absolute' }}
      light={lazyLoad ? lazyLoad.placeholderImage || true : false}
      playIcon={<PlayButton onClick={onPlay} />}
    />
  )
}