import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>My favorite groups </h1> 
    <p>
     - RED VELVET <br></br>
     - EXO <br></br>
     - LOONA <br></br>
     - GIRLS GENERATION <br></br>
     - KARA <br></br>
     - T-ARA <br></br>
     - FROMIS_9 <br></br>
     - APRIL <br></br>
     - WJSN <br></br>
     - OH MY GIRL <br></br>
     - EXID <br></br>
     - BLACKPINK <br></br>
     - GFRIEND <br></br>
     - CLC <br></br>
     - SISTAR <br></br>
     - (G)I-DLE <br></br>
     - TWICE <br></br>
     - DREAMCATCHER <br></br>
     - and many more...
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