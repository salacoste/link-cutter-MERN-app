import React, {useState} from 'react'
import styled from 'styled-components'
import {Col, Container, Row,} from 'shards-react'
import MainSidebar from '@/elements/mainSidebar/mainSidebar.js'
import MainNavbar from '@/elements/mainNavbar/mainNavbar'

import '../MainLayout/mainLayout.scss'



const Wrapper = styled.div`
  height: 100%
`



export const NonAuthLayout = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Wrapper>
      <Container >
        <Row>
          <Col
            className="main-content p-0"
            lg={{ size: 12 }}
            md={{ size: 12 }}
            sm="12"
            tag="main"
          >
          { props.children }
          
          </Col>

        </Row>
      </Container>

    </Wrapper>
  )

}

export default NonAuthLayout