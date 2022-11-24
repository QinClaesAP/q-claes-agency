import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const ArtistsPage = ({
  data: {
    allWpArtist: { edges },
  },
}) => {
  return (
    <Layout pageTitle="Artists of Q. Claes Agency">
      {edges.map(item => {
        const artist = item.node.artistMeta
        return (
          <p key={item.node.id}>
            {artist.firstName} {artist.lastName}
          </p>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    allWpArtist {
      edges {
        node {
          artistMeta {
            firstName
            lastName
            artistName
          }
          id
        }
      }
    }
  }
`
export default ArtistsPage
