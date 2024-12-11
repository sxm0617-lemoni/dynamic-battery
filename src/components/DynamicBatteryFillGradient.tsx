import clsx from 'clsx'
import { FC, useEffect, useRef } from 'react'

interface DynamicBatteryFillGradientProps {
  level: number
}

const DynamicBatteryFillGradient: FC<DynamicBatteryFillGradientProps> = ({
  level,
}) => {
  const fillRef = useRef<SVGRectElement | null>(null)

  useEffect(() => {
    if (fillRef.current) {
      const newHeight = (level / 100) * 52 + 0.5
      const newY = 60 - newHeight + 0.5
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
      <rect
        className={clsx({
          'fill-red-500': level <= 20,
          'fill-green-500': level > 20,
        })}
        x='26'
        y='0'
        width='12'
        height='4'
      ></rect>
      <rect
        className={clsx({
          'stroke-red-500': level <= 20,
          'stroke-green-500': level > 20,
        })}
        x='14'
        y='6'
        width='36'
        height='56'
        rx='4'
        ry='4'
        fill='none'
        strokeWidth='4'
      ></rect>
      <rect
        className={clsx({
          'fill-red-500': level <= 20,
          'fill-green-500': level > 20,
        })}
        ref={fillRef}
        x='16'
        y='60'
        width='32'
        height='0'
      ></rect>
    </svg>
  )
}

export default DynamicBatteryFillGradient
