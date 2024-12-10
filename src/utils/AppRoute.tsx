import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

interface AppRouteProps {}

const AppRoute: FC<AppRouteProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default AppRoute
