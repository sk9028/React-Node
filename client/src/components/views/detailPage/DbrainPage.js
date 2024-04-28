import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function DbrainPage() {
  return (
    <div style={{
      minHeight: '75vh'
    }}>
     <article className="my-3" id="accordion">
      <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>한국재정정보원 - 차세대예산회계시스템</h3>
        <a className="d-flex align-items-center" href="https://www.notion.so/27831c7111c2496dbf14b24cf82ac7a3?pvs=4#4a89b45ff7a04e57974babe97f26c62e">㈜조인트리, 서울시 중구 – (2020년 10월 - 2022년 3월)</a>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
                First Item
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
                Second Item
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
                Second Item
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </article> 
  </div>
  )
}

export default DbrainPage