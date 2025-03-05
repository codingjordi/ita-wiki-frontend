import { FC } from "react";
interface VotesResource {
  votes: number;
}

export const VotesResource: FC<VotesResource> = ({ votes }) => {
  return (
    <span role="resource" data-testid="resource-votes" className="inline-flex">
      <strong>{votes}</strong>
    </span>
  );
};
