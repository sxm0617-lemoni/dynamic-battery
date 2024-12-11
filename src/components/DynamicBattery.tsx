import clsx from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'

interface DynamicBatteryProps {
  /** battery style type */
  type?: 'fill' | 'gap' | 'grid'
  /** battery percentage */
  level?: number
  /** is gradient */
  gradient?: boolean
  /** is charging */
  charging?: boolean
}

const DynamicBattery: FC<DynamicBatteryProps> = ({
  type = 'fill',
  level = 0,
  gradient = false,
  charging = false,
}) => {
  const fillRef = useRef<SVGRectElement | null>(null)
  const timerRef = useRef<NodeJS.Timeout>()

  const [fillLevel, setFillLevel] = useState(0)

  useEffect(() => {
    setFillLevel(level)
  }, [level])

  useEffect(() => {
    if (fillRef.current) {
      const newHeight =
        type === 'fill' ? (fillLevel / 100) * 52 + 0.5 : (fillLevel / 100) * 46
      const newY = type === 'fill' ? 60 - newHeight + 0.5 : 57 - newHeight

      fillRef.current.setAttribute('height', `${newHeight}`)
      fillRef.current.setAttribute('y', `${newY}`)
    }
  }, [type, fillLevel])

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    if (charging) {
      if (type === 'grid') {
        timerRef.current = setInterval(() => {
          setFillLevel((level) => {
            if (level < 100) {
              return Math.min(level + 20, 100)
            }

            return 0
          })
        }, 400)
      } else {
        timerRef.current = setInterval(() => {
          setFillLevel((level) => {
            if (level < 100) {
              return level + 1
            }

            return 0
          })
        }, 20)
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [type, charging])

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
      width='64'
      height='64'
    >
      <rect
        className={clsx({
          'fill-red-500': gradient && fillLevel <= 20,
          'fill-green-500': gradient && fillLevel > 20,
        })}
        x='26'
        y='0'
        width='12'
        height='4'
        fill='currentColor'
      ></rect>
      <rect
        className={clsx({
          'stroke-red-500': gradient && fillLevel <= 20,
          'stroke-green-500': gradient && fillLevel > 20,
        })}
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
        className={clsx({
          'fill-red-500': gradient && fillLevel <= 20,
          'fill-green-500': gradient && fillLevel > 20,
        })}
        ref={fillRef}
        x={type === 'fill' ? '14' : '19'}
        y={type === 'fill' ? '57' : '60'}
        width={type === 'fill' ? '36' : '26'}
        height='0'
        fill='currentColor'
      ></rect>
      {type === 'grid' ? (
        <>
          <rect x='19' y='47.5' width='26' height='2' fill='white'></rect>
          <rect x='19' y='38' width='26' height='2' fill='white'></rect>
          <rect x='19' y='28.5' width='26' height='2' fill='white'></rect>
          <rect x='19' y='19' width='26' height='2' fill='white'></rect>
        </>
      ) : null}
    </svg>
  )
}

export default DynamicBattery
