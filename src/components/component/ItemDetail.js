import React, { memo } from "react";
import { Button } from "antd";

const ItemDetail = memo(({ itemDetail, handleDeleteItem, handleEditItem }) => {
  const _handleDeleteItem = () => {
    if (itemDetail.id) handleDeleteItem(itemDetail.id);
  };

  const _handleEditItem = () => {
    if (itemDetail) handleEditItem();
  };

  return (
    <div>
      <table className="table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <td></td>
        </tr>
        <tr>
          <td>{itemDetail.id}</td>
          <td>{itemDetail.name}</td>
          <td>{itemDetail.age}</td>
          <td>{itemDetail.address}</td>
          <td>
            <Button type="ghost" onClick={_handleEditItem}>
              Edit Item
            </Button>
            <Button type="primary" onClick={_handleDeleteItem}>
              Delete Item
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
});

export default ItemDetail;
