import React from "react";
import { Card, Row, Col } from "antd";
import { Typography } from "antd";

import CountUp from "react-countup";
import styles from "./cards.module.css";

const { Title } = Typography;

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <div className={styles.example}>Loading...</div>;
  }
  return (
    <div className={styles.cardwrapper}>
      <Row gutter={16}>
        <Col xs={24} xl={8} md={8}>
          <Card
            title="Infected"
            bordered={true}
            className={styles.cardShadow}
            size="small"
          >
            <Title level={3} type="secondary">
              <CountUp
                start={0}
                end={confirmed.value}
                separator=","
                duration={2.5}
              />
            </Title>
            <Title level={4} code>
              {new Date(lastUpdate).toDateString()}
            </Title>
            <Title level={5}>No.of active cases of Covid-19</Title>

            {}
          </Card>
        </Col>
        <Col xs={24} xl={8} md={8}>
          <Card
            title="Recovered"
            bordered={true}
            className={styles.cardShadow}
            size="small"
          >
            <Title level={3} type="success">
              <CountUp
                start={0}
                end={recovered.value}
                separator=","
                duration={2.5}
              />
            </Title>
            <Title level={4} code>
              {new Date(lastUpdate).toDateString()}
            </Title>
            <Title level={5}>No. of recoveries from Covid-19</Title>
          </Card>
        </Col>
        <Col xs={24} xl={8} md={8}>
          <Card
            title="Deaths"
            bordered={true}
            className={styles.cardShadow}
            size="small"
          >
            <Title level={3} type="danger">
              {" "}
              <CountUp
                start={0}
                end={deaths.value}
                separator=","
                duration={2.5}
              />
            </Title>
            <Title level={4} code>
              {new Date(lastUpdate).toDateString()}
            </Title>
            <Title level={5}>No. of deaths caused by Covid-19 </Title>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
