import { FuelPricesContext } from '../context/FuelPriceContext'
import { useContext } from 'react'

export const useFuelPricesContext = () => {
  const context = useContext(FuelPricesContext)

  if (!context) {
    throw Error('useFuelPricesContext must be used inside an FuelPricesContextProvider')
  }

  return context
}