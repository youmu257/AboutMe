import { render, screen } from '@testing-library/react'
import App from './App'

test('renders name heading', () => {
  render(<App />)
  const heading = screen.getByRole('heading', { level: 1, name: '我是李冠霖' })
  expect(heading).toBeInTheDocument()
})
