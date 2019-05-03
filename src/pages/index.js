import React from "react"
import { Link } from "gatsby"
import { Button } from 'reactstrap'
import '../scss/bootstrap/bootstrap.scss';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">
    <Button color="primary">Go to page 2</Button>
    </Link>
  </Layout>
)

export default IndexPage
