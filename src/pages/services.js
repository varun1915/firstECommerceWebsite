import * as React from "react"
import { graphql } from 'gatsby'
 
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"

const AboutPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection 
      img = {data.img.childImageSharp.fluid}
      title="Our Services"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoblock heading=""/>
    <Infoblock heading="Why Choose Us"/>
  </Layout>
)
       
export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`

export default AboutPage