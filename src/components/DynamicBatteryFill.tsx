import { useEffect, useRef } from 'react'

interface DynamicBatteryFillProps extends React.HTMLAttributes<HTMLDivElement> {
  level: number
}

const DynamicBatteryFill: React.FC<DynamicBatteryFillProps> = ({ level }) => {
  const fillRef = useRef<SVGRectElement | null>(null)

  useEffect(() => {
    if (fillRef.current) {
      // 动态设置电池填充高度
      const newHeight = (level / 100) * 52 + 0.5 // 电池内部最大高度
      const newY = 60 - newHeight + 0.5 // 计算起始 y 坐标，保持填充在底部
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
      fill='red'
    >
      <rect
        className='fill-green-500'
        x='26'
        y='0'
        width='12'
        height='4'
        fill='currentColor'
      ></rect>
      <rect
        className='stroke-green-500'
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
        className='fill-green-500'
        id='battery-fill'
        ref={fillRef} // 绑定 ref
        x='16'
        y='60' // 初始位置在底部
        width='32'
        height='0'
        fill='currentColor'
      ></rect>
    </svg>
  )
}

export default DynamicBatteryFill
