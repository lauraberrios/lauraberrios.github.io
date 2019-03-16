import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About Me </h1> 
    <p>
     My name is Laura Berrios Nieves, I'm 23 years old and am currently a 
     student at DePaul University studying Information Technology. As you
     can tell from my page, I am a huge K-Pop fan. My taste mostly includes 
     girl groups but evry now and then I find a good boy group song. K-Pop 
     gets a lot of hate because of their annoying fanbase, but if you look 
     past that, you could see how amazing K-Pop truly is. My page is all about 
     my favorite songs that I recommend. I hope you enjoy my page and find a 
     new artist you might like. 
    </p>
  </Layout>
)

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`