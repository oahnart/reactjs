import React from "react";
import { List, Avatar } from "antd";

const ItemView = ({ itemProps, handleSelectItem }) => {
  const _handleSelectItem = () => {
    handleSelectItem(itemProps);
  };
  return (
    <List.Item onClick={_handleSelectItem}>
      <List.Item.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={itemProps.name}
        description={itemProps.address}
      />
    </List.Item>
  );
};

export default ItemView;
