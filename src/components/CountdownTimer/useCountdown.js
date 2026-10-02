import { useEffect, useRef, useState } from "react";

/* Shared card-timer state: whole-seconds countdown with pause, reset and
   early finish. `run` is seconds remaining + 1 (undefined when idle), kept
   that way so existing `remaining={run - 1}` callers keep working.
   `onComplete` fires once when the timer runs out naturally. */
export default function useCountdown(onComplete) {
  const [run, setRun] = useState();
  const [paused, setPaused] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!run || paused) return undefined;
    if (run > 1) {
      const tick = setTimeout(() => setRun(run - 1), 1000);
      return () => clearTimeout(tick);
    }
    onCompleteRef.current();
    return undefined;
  }, [run, paused]);

  const start = (seconds) => {
    setPaused(false);
    setRun(seconds + 1);
  };

  /* Back to the ready state: the Start Timer button returns so the player
     can reattempt (e.g. after failing the task). Also used on completion. */
  const reset = () => {
    setPaused(false);
    setRun(undefined);
  };

  const togglePause = () => setPaused((p) => !p);

  return { run, paused, start, reset, togglePause };
}
