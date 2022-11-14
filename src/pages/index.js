import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Inghelbrecht Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="Just the two of us"
        src="../images/QZL2FTi - Imgur.png"
      />
    </Layout>
  )
}

export default IndexPage
