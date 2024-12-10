import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

const DynamicBatteryGapGradientCharging = () => {
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
      // 动态设置电池填充高度
      const newHeight = (level / 100) * 46 // 电池内部最大高度
      const newY = 57 - newHeight // 计算起始 y 坐标，保持填充在底部
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
        id='battery-fill'
        ref={fillRef} // 绑定 ref
        x='19'
        y='57' // 初始位置在底部
        width='26'
        height='0'
      ></rect>
    </svg>
  )
}

export default DynamicBatteryGapGradientCharging
