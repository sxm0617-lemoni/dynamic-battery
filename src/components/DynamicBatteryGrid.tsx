import clsx from 'clsx'
import { useEffect, useRef } from 'react'

const DynamicBatteryGrid = ({ level }: { level: number }) => {
  const fillRef = useRef<SVGRectElement | null>(null)

  useEffect(() => {
    if (fillRef.current) {
      const newHeight =
        Math.floor(level / 20) * 7.5 +
        (Math.ceil(level / 20) - 1) * 2 +
        ((level % 20) / 100) * 38 // 电池内部最大高度
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
        fill='currentColor'
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
        stroke='currentColor'
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
        fill='currentColor'
      ></rect>
      <rect
        x='19'
        y='47.5' // 初始位置在底部
        width='26'
        height='2'
        fill='white'
      ></rect>
      <rect
        x='19'
        y='38' // 初始位置在底部
        width='26'
        height='2'
        fill='white'
      ></rect>
      <rect
        x='19'
        y='28.5' // 初始位置在底部
        width='26'
        height='2'
        fill='white'
      ></rect>
      <rect
        x='19'
        y='19' // 初始位置在底部
        width='26'
        height='2'
        fill='white'
      ></rect>
    </svg>
  )
}

export default DynamicBatteryGrid
