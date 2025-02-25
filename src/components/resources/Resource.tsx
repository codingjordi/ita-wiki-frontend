import { FC } from "react";
import { IntResource } from "../../types";
import { BodyResource } from "./BodyResource";
import { ContentResource } from "./ContentResource";
// import { FavoriteResource } from "./FavoriteResource";
// import { VotesResource } from "./VotesResource";
// import { UserResource } from "./UserResource";
// import { FooterResource } from "./FooterResource";
type ResourceProps = {
  resource: IntResource
}

export const Resource: FC<ResourceProps> = ({ resource }) => {
  return (
    <li className="border-2 border-black ">
      <BodyResource>
        {/* <VotesResource votes={resource.votes} /> */}
        <ContentResource>
          <h3 className="p-4 text-2xl">{resource.title}</h3>
          {/* <p className="p-4">{resource.description}</p> */}
        </ContentResource>
        {/* <FavoriteResource favorite={resource.favorite} /> */}
      </BodyResource>
      {/* <FooterResource>
        {resource.user &&
          <>
            <UserResource user={resource.user} />
            <span>{resource.create_at}</span>
          </>
        }
      </FooterResource> */}
    </li>
  )
}
