import { render, screen } from '@testing-library/react'
import { ListResources } from '../ListResources'
import moock from "../../../moock/resources.json"
import { IntResource } from '../../../types'

const moockrResources = moock.resources.map(resource => ({
  ...resource,
  create_at: "2025-02-25 00:00:00",
  update_at: "2025-02-25 00:00:00"
} as IntResource))

describe('ListResources Component', () => {

  it('should render the component and display the correct title', () => {
    render(<ListResources resources={moockrResources} technology="React" />)

    const titleElement = screen.getByText('Recursos React');
    expect(titleElement.tagName).toBe('H2')
  })

})
