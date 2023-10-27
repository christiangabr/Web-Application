import { createContext, useReducer } from 'react'

export const FuelPricesContext = createContext()

export const fuelpricesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FUELPRICES': 
      return {
        fuelprices: action.payload
      }
    case 'CREATE_FUELPRICE':
      return {
        fuelprices: [action.payload, ...state.fuelprices]
      }
    case 'DELETE_FUELPRICE':
      return {
        fuelprices: state.fuelprices.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const FuelPricesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fuelpricesReducer, {
    fuelprices: null
  })

  return (
    <FuelPricesContext.Provider value={{...state, dispatch}}>
      { children }
    </FuelPricesContext.Provider>
  )
}