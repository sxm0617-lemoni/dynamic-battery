import { Checkbox, MenuItem, Select, TextField } from '@mui/material'
import { FC, useState } from 'react'
import DynamicBattery from './DynamicBattery'
import { Flex } from './Flex'

interface PlaygroundProps {}

const Playground: FC<PlaygroundProps> = () => {
  const [type, setType] = useState<'fill' | 'gap' | 'grid'>('fill')
  const [level, setLevel] = useState(0)
  const [gradient, setGradient] = useState(false)
  const [charging, setCharging] = useState(false)

  return (
    <Flex className='p-2 gap-4' column>
      <DynamicBattery
        type={type}
        level={level}
        gradient={gradient}
        charging={charging}
      />
      <Flex className='gap-2' alignCenter>
        <div>Fill Mode</div>
        <Select
          size='small'
          value={type}
          onChange={(e) => setType(e.target.value as 'fill' | 'gap' | 'grid')}
        >
          <MenuItem value='fill'>Fill</MenuItem>
          <MenuItem value='gap'>Gap</MenuItem>
          <MenuItem value='grid'>Grid</MenuItem>
        </Select>
      </Flex>
      <Flex className='gap-2' alignCenter>
        <div>Battery Power</div>
        <TextField
          type='number'
          size='small'
          slotProps={{
            htmlInput: {
              min: 0,
              max: 100,
              step: 1,
            },
          }}
          disabled={charging}
          onChange={(e) => setLevel(Math.min(+e.target.value, 100))}
        />
      </Flex>
      <Flex className='gap-2' alignCenter>
        <div>Gradient</div>
        <Checkbox onChange={(e) => setGradient(e.target.checked)} />
      </Flex>
      <Flex className='gap-2' alignCenter>
        <div>Charging Animation</div>
        <Checkbox onChange={(e) => setCharging(e.target.checked)} />
      </Flex>
    </Flex>
  )
}

export default Playground
