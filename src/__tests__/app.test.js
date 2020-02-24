import {
  screen
} from '@testing-library/dom'

document.body.innerHTML = '<div>It works.</div>'

test('is testing library working', () => {
  expect(screen.getByText(/It works/)).toBeTruthy()
})