import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from "../Page";

test('Ceci est un test du header', () => {});

test('Navigate to stats', async () => {
    // ARRANGE
    render(<Index />)

    // ACT
    // await userEvent.click(screen.getByText('Statistiques'))
    // await screen.findByRole('heading')

    // ASSERT
    // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    // expect(screen.getByRole('button')).toBeDisabled()
})