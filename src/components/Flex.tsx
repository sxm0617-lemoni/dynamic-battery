import clsx from 'clsx'
import { FC } from 'react'

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** flex: 1 */
  flex?: boolean
  /** flex-direction: column */
  column?: boolean
  /** flex-wrap: wrap */
  wrap?: boolean
  /** justify-content: flex-start */
  justifyStart?: boolean
  /** justify-content: flex-end */
  justifyEnd?: boolean
  /** justify-content: center */
  justifyCenter?: boolean
  /** justify-content: space-between */
  justifyBetween?: boolean
  /** justify-content: space-around */
  justifyAround?: boolean
  /** justify-content: space-evenly */
  justifyEvenly?: boolean
  /** align-items: flex-start */
  alignStart?: boolean
  /** align-items: flex-end */
  alignEnd?: boolean
  /** align-items: center */
  alignCenter?: boolean
  /** align-items: stretch */
  alignStretch?: boolean
  /** align-items: baseline */
  alignBaseline?: boolean
  /** align-content: flex-start */
  alignContentStart?: boolean
  /** align-content: flex-end */
  alignContentEnd?: boolean
  /** align-content: center */
  alignContentCenter?: boolean
  /** align-content: stretch */
  alignContentStretch?: boolean
  /** align-content: space-between */
  alignContentBetween?: boolean
  /** align-content: space-around */
  alignContentAround?: boolean
}

/*
 * Flex组件主体
 */
const Flex: FC<FlexProps> = ({
  className,
  children,
  flex,
  column,
  wrap,
  justifyStart,
  justifyEnd,
  justifyCenter,
  justifyBetween,
  justifyAround,
  justifyEvenly,
  alignStart,
  alignEnd,
  alignCenter,
  alignStretch,
  alignBaseline,
  alignContentStart,
  alignContentEnd,
  alignContentCenter,
  alignContentStretch,
  alignContentBetween,
  alignContentAround,
  ...props
}) => {
  return (
    <div
      className={clsx(className, 'flex', {
        'flex-1': flex,
        'flex-col': column,
        'flex-wrap': wrap,
        'justify-start': justifyStart,
        'justify-end': justifyEnd,
        'justify-center': justifyCenter,
        'justify-between': justifyBetween,
        'justify-around': justifyAround,
        'justify-evenly': justifyEvenly,
        'items-start': alignStart,
        'items-end': alignEnd,
        'items-center': alignCenter,
        'items-stretch': alignStretch,
        'items-baseline': alignBaseline,
        'content-start': alignContentStart,
        'content-end': alignContentEnd,
        'content-center': alignContentCenter,
        'content-stretch': alignContentStretch,
        'content-between': alignContentBetween,
        'content-around': alignContentAround,
      })}
      {...props}
    >
      {children}
    </div>
  )
}

export { Flex }
