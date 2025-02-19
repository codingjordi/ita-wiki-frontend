import { render, screen } from '@testing-library/react'
import { ListResources } from '../ListResources'
import mook from "../../../moock/resources.json"
import { IntResource } from '../../../types'
const resources = mook.resources.map(resource => {
  return {
    ...resource,
    user: {
      ...resource.user,
      photoURL: 'http//avatar_post.svg'
    }
  }
}) as IntResource[]

describe('ListResources Component', () => {

  it('should render the component and display the correct title', () => {
    render(<ListResources resources={resources} nameResource="React.js" />)

    const titleElement = screen.getByText('Recursos React.js');
    expect(titleElement.tagName).toBe('H2')
  })

})
