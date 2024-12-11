import { FC, useEffect, useRef, useState } from 'react'

const DynamicBatteryGapCharging: FC = () => {
  const fillRef = useRef<SVGRectElement | null>(null)

  const [level, setLevel] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setLevel((level) => {
        if (level < 100) {
          return level + 1
        }

        return 0
      })
    }, 20)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (fillRef.current) {
      const newHeight = (level / 100) * 46
      const newY = 57 - newHeight
      fillRef.current.setAttribute('height', `${newHeight}`)
      fillRef.current.setAttribute('y', `${newY}`)
    }
  }, [level])

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
      width='64'
      height='64'
    >
      <rect x='26' y='0' width='12' height='4' fill='currentColor'></rect>
      <rect
        x='14'
        y='6'
        width='36'
        height='56'
        rx='4'
        ry='4'
        fill='none'
        stroke='currentColor'
        strokeWidth='4'
      ></rect>
      <rect
        ref={fillRef}
        x='19'
        y='57'
        width='26'
        height='0'
        fill='currentColor'
      ></rect>
    </svg>
  )
}

export default DynamicBatteryGapCharging
