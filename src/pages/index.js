import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="Welcome to Q. Claes Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="Just the two of us"
        src="../images/QZL2FTi - Imgur.png"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      homeFields {
        artists {
          ... on WpArtist {
            id
            slug
            artistMeta {
              artistName
              firstName
              lastName
              profilePicture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      transformOptions: { grayscale: true }
                    )
                  }
                }
              }
            }
          }
        }
        callToAction {
          title
          url
        }
        title
        description
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
