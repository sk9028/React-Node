import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function NpisPage() {
  return (
    <div style={{
      minHeight: '75vh'
    }}>
     <article className="my-3" id="accordion">
      <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>국민연금공단 - 지능형 연금복지 통합플랫폼 구축(NPIS)</h3>
        <a className="d-flex align-items-center" href="https://www.notion.so/27831c7111c2496dbf14b24cf82ac7a3?pvs=4#9a8253e5bf4f445f84e0c678172ddb9c">㈜조인트리, 서울시 종로구 – (2023년 1월 - 현재)</a>
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

export default NpisPage
