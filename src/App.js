import React, { useState } from "react";
import { Row, Col } from "antd";

import AddEditItem from "./components/component/AddEditItem";
import ListItemView from "./components/component/ListItemView";
import ItemDetail from "./components/component/ItemDetail";
import "./App.scss";
import Tiki from "./components/pageTiki/Tiki";

const initListItem = [];
for (let i = 1; i < 10; i++) {
  initListItem.push({
    key: i,
    id: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const App = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [type, setType] = useState("add");
  const [listItem, setListItem] = useState(initListItem);
  const [itemDetail, setItemDetail] = useState(initListItem[0]);

  const _handleSelectItem = (itemSelect) => {
    setItemDetail(itemSelect);
  };

  const _handleDeleteItem = (itemIdDelete) => {
    const listItemTemp = listItem.filter((el) => el.id !== itemIdDelete);
    setListItem(listItemTemp);
    setItemDetail([]);
    console.log(listItemTemp);
  };

  const _handleDeleteAll = () => {
    setListItem([]);
  };

  const _handleAddItem = () => {
    setVisibleModal(true);
  };

  const _handleCancel = () => {
    setVisibleModal(false);
    setType("add");
  };

  const _handleEditItem = () => {
    setVisibleModal(true);
    setType("edit");
  };

  const _addItem = (item) => {
    // call api add item => call api success -> refresh data of page
    const itemAdd = {
      ...item,
      id: Math.random().toString(36).substr(2, 9),
    };
    setListItem([itemAdd, ...listItem]);
    setVisibleModal(false);
    setType("edit");
  };

  const _editItem = (item) => {
    // call api edit item => call api success -> refresh data of page
    const indexSelectedEdit = listItem.findIndex((el) => el.id === item.id);
    const listItemTemp = [...listItem];
    listItemTemp[indexSelectedEdit] = item;
    setListItem(listItemTemp);
    setVisibleModal(false);
    setType("edit");
  };

  return (
    <>
      <div>
        <Tiki />
      </div>
      <Row className="container">
        <Col span={8} className="left-container">
          <ListItemView
            listItem={listItem}
            handleAddItem={_handleAddItem}
            handleSelectItem={_handleSelectItem}
            handleDeleteAll={_handleDeleteAll}
          />
        </Col>
        <Col span={16} className="right-container">
          <ItemDetail
            itemDetail={itemDetail}
            handleDeleteItem={_handleDeleteItem}
            handleEditItem={_handleEditItem}
          />
        </Col>
        {visibleModal && (
          <AddEditItem
            visibleModal={visibleModal}
            type={type}
            item={itemDetail}
            handleCancel={_handleCancel}
            addItem={_addItem}
            editItem={_editItem}
          />
        )}
      </Row>
    </>
  );
};

export default App;
