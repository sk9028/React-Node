import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function KitechPage() {
  return (
    <div style={{
      minHeight: '75vh'
    }}>
     <article className="my-3" id="accordion">
      <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>한국생산기술연구원 - 2022년 업무포털 종합정보시스템 
유지보수 용역 고도화 사업</h3>
        <a className="d-flex align-items-center" href="https://www.notion.so/27831c7111c2496dbf14b24cf82ac7a3?pvs=4#40661aca576b4bcab3e3ec0d44e71650">㈜조인트리, [서울시 영등포구 / 충청남도 천안시] – (2022년 4월 - 2022년 12월)</a>
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

export default KitechPage
