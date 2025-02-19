import { FC } from "react"
interface FavoriteResourceProps {
  favorite: boolean
}
export const FavoriteResource: FC<FavoriteResourceProps> = ({ favorite }) => {
  return (<i role="resource" data-testid="favorite-resource" className="inline-flex">{favorite ? '💕' : '❤'}</i>)
}
