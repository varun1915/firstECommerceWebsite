import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Coursecart from "../components/Card/Coursecart"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection 
      img = {data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle=""
      heroclass="hero-background"
    />
    <Infoblock heading="About Us"/>
    <Coursecart courses={data.courses}/>
    <DualInfoblock heading="Our Team"/>
  </Layout>
)
       
export const query = graphql`{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
 
  courses: allContentfulCourses{
		edges {
		  node {
		    id
        title
        price
        category
        description{
        	description
        }
        image{
          fixed(width:300, height:170){
						...GatsbyContentfulFixed_tracedSVG
          }
        }
      } 
		} 
  }
}`

export default IndexPage
