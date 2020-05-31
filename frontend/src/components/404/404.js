import React, {Fragment} from 'react'
import {Row, Col, Container} from 'shards-react'


import './404.scss'

export const notFoundPage = () => {
  return (
    <Container fluid className="mt-2">
      <Row>
        <Col>
          <h1>404 Error: page not found</h1>
          <h5>Please, try another request</h5>
        </Col>
      
      </Row>
    </Container>
    
  )
}

export default notFoundPage

