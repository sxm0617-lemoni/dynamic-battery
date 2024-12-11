import { FC, useEffect, useRef, useState } from 'react'

const DynamicBatteryGridCharging: FC = () => {
  const fillRef = useRef<SVGRectElement | null>(null)

  const [level, setLevel] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setLevel((level) => {
        if (level < 100) {
          return level + 20
        }

        return 0
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (fillRef.current) {
      const newHeight =
        Math.floor(level / 20) * 7.5 +
        (Math.ceil(level / 20) - 1) * 2 +
        ((level % 20) / 100) * 38
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
      <rect x='19' y='47.5' width='26' height='2' fill='white'></rect>
      <rect x='19' y='38' width='26' height='2' fill='white'></rect>
      <rect x='19' y='28.5' width='26' height='2' fill='white'></rect>
      <rect x='19' y='19' width='26' height='2' fill='white'></rect>
    </svg>
  )
}

export default DynamicBatteryGridCharging
