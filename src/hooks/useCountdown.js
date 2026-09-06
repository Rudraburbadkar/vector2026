import { useEffect, useState } from 'react'

function getTimeParts(targetDate) {
  const target = new Date(targetDate).getTime()
  let diff = target - Date.now()
  if (diff < 0) diff = 0

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000)
  }
}

/** Ticks down to `targetDate` (ISO string) once per second. */
export default function useCountdown(targetDate) {
  const [time, setTime] = useState(() => getTimeParts(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeParts(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return time
}
