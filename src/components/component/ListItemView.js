import React from "react";
import { Row, List, Col, Button } from "antd";

import ItemView from "./ItemView";
import "./Styles.scss";

const ListItemView = ({
  listItem,
  handleSelectItem,
  handleDeleteAll,
  handleAddItem,
}) => {
  const _handleDeleteAll = () => {
    handleDeleteAll();
  };
  return (
    <Row className="list-item-view">
      <Col span={24}>
        <Row>
          <Button type="primary" onClick={handleAddItem}>
            Add New User
          </Button>
          <Button type="dashed" onClick={_handleDeleteAll}>
            Delete All
          </Button>
        </Row>
      </Col>
      <Col span={24} className="list-item">
        <List
          itemLayout="horizontal"
          dataSource={listItem}
          renderItem={(item) => (
            <ItemView
              key={item.id}
              itemProps={item}
              handleSelectItem={handleSelectItem}
            />
          )}
        />
      </Col>
    </Row>
  );
};

export default ListItemView;
