import React from 'react'
import styled from 'styled-components'
import {Col, Container, Row,} from 'shards-react'
import MainSidebar from '@/elements/mainSidebar/mainSidebar.js'

import './mainLayout.scss'



const Wrapper = styled.div`
  height: 100%
`



export const MainLayout = (props) => {

  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <MainSidebar/>
          <Col
            className="main-content p-0"
            lg={{ size: 9, offset: 3 }}
            md={{ size: 8, offset: 4 }}
            sm="12"
            tag="main"
          >
          {/* {!props.noNavbar && <MainNavbar />} */}
          { props.children }
          {/* {!props.noFooter && <MainFooter />} */}

          
          </Col>

        </Row>
      </Container>

    </Wrapper>
  )

}

export default MainLayout