import { render, screen } from "@testing-library/react"
import { VotesResource } from "../VotesResource"
const votes = 55 as number;

describe('ResourceVotes Component', () => {
  it("ResourceVotes esta definido", () => {
    expect(VotesResource).toBeDefined()
  })

  it("The component must have the initial styles", () => {
    render(<VotesResource votes={votes} />)
    const votesResource = screen.getByTestId("resource-votes")
    expect(votesResource).toHaveClass("inline-flex")
  })

})
