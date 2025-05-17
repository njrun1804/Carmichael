import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)
    expect(screen.getByText('Premium\u00A0Custom-Fit\u00A0Covers')).toBeInTheDocument()
  })
})
