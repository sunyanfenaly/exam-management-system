import {
  useRoutes
} from 'react-router-dom'
import router from './router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserInfo } from './store/models/user'
import type { RootState, AppDispatch } from './store'

const App = () => {
  const routes = useRoutes(router)
  const loading = useSelector((state: RootState) => state.user.loading)
  console.log(loading)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  if (loading) {
    return <div>loading....</div>
  }

  return (
    <div className='app'>{routes}</div>
  )
}

export default App