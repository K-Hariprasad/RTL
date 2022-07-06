import { render } from '@testing-library/react'
import { OrderContextProvider } from '../context/orderContext'

// creating a custom render method here
const newRender = (ui, options) => render(ui, { wrapper: OrderContextProvider, ...options })

// exporting all the methods from testing-library/react
export * from '@testing-library/react';

// overriding render method with the created custom render method
export { newRender as render } 