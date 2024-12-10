import { Grid2 } from '@mui/material'
import { FC } from 'react'
import DynamicBatteryFill from '../components/DynamicBatteryFill'
import DynamicBatteryFillCharging from '../components/DynamicBatteryFillCharging'
import DynamicBatteryFillGradient from '../components/DynamicBatteryFillGradient'
import DynamicBatteryFillGradientCharging from '../components/DynamicBatteryFillGradientCharging'
import DynamicBatteryGap from '../components/DynamicBatteryGap'
import DynamicBatteryGapCharging from '../components/DynamicBatteryGapCharging'
import DynamicBatteryGapGradient from '../components/DynamicBatteryGapGradient'
import DynamicBatteryGapGradientCharging from '../components/DynamicBatteryGapGradientCharging'
import DynamicBatteryGrid from '../components/DynamicBatteryGrid'
import DynamicBatteryGridCharging from '../components/DynamicBatteryGridCharging'
import DynamicBatteryGridGradient from '../components/DynamicBatteryGridGradient'
import DynamicBatteryGridGradientCharging from '../components/DynamicBatteryGridGradientCharging'
import { Flex } from '../components/Flex'
import Playground from '../components/Playground'
import './style.css'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <Flex className='p-6 gap-4' column>
      <Flex className='gap-2' column>
        <div className='title'>Playground</div>
        <Playground />
      </Flex>
      <Flex className='gap-2' column>
        <div className='title'>All Components</div>
        <Grid2 container>
          <Grid2 size={2} offset={2}>
            <Flex column alignCenter justifyCenter>
              <div className='header'>Fill</div>
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='w-full h-full' column alignCenter justifyCenter>
              <div className='header'>Gap</div>
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='w-full h-full' column alignCenter justifyCenter>
              <div className='header'>Grid</div>
            </Flex>
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 size={2}>
            <Flex className='header h-full' column alignEnd justifyCenter>
              Basic
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryFill level={20} />
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryGap level={50} />
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryGrid level={80} />
            </Flex>
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 size={2}>
            <Flex className='header h-full' column alignEnd justifyCenter>
              Gradient
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryFillGradient level={20} />
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryGapGradient level={50} />
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryGridGradient level={80} />
            </Flex>
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 size={2}>
            <Flex className='header h-full' column alignEnd justifyCenter>
              Charging
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryFillCharging />
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryGapCharging />
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryGridCharging />
            </Flex>
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 size={2}>
            <Flex className='header h-full' column alignEnd justifyCenter>
              Gradient Charging
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryFillGradientCharging />
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryGapGradientCharging />
            </Flex>
          </Grid2>
          <Grid2 size={2}>
            <Flex className='item' column alignCenter justifyCenter>
              <DynamicBatteryGridGradientCharging />
            </Flex>
          </Grid2>
        </Grid2>
      </Flex>
    </Flex>
  )
}

export default Home
