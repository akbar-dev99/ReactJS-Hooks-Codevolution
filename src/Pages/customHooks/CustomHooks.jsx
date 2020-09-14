import React from "react";
import { Container, Row, Col } from "reactstrap";
import CustomDocTitleOne from "./Custom.DocTitleOne";
import CustomDocTitleTwo from "./Custom.DocTitleTwo";
import TemplateHook from "../../Components/layouts/Template";

function CustomHooks(props) {
  return (
    <TemplateHook {...props}>
      <Container className="pt-md-5">
        <h3>Custum Hooks</h3>
        <br />
        <br />
        <Row>
          <Col sm={6} md={4}>
            <CustomDocTitleOne />
          </Col>
          <Col sm={6} md={4}>
            <CustomDocTitleTwo />
          </Col>
        </Row>
      </Container>
    </TemplateHook>
  );
}

export default CustomHooks;
