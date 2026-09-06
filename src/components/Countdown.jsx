import useCountdown from '../hooks/useCountdown'
import { FEST_TARGET_DATE } from '../data/eventsData'

const pad = (n) => String(n).padStart(2, '0')

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(FEST_TARGET_DATE)

  const units = [
    { value: days, label: 'DAYS' },
    { value: hours, label: 'HOURS' },
    { value: minutes, label: 'MINUTES' },
    { value: seconds, label: 'SECONDS' }
  ]

  return (
    <div className="countdown-strip" id="countdown">
      <span className="cd-caption">The event starts in</span>
      <div className="cd-units">
        {units.map((unit, i) => (
          <div className="cd-unit-group" key={unit.label}>
            <div className="cd-unit">
              <span className="cd-num">{pad(unit.value)}</span>
              <span className="cd-label">{unit.label}</span>
            </div>
            {i < units.length - 1 && <span className="cd-sep">:</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
