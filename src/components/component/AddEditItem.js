import React from "react";
import { Button, Form, Input, Modal } from "antd";

const AddEditItem = ({
  type,
  item,
  visibleModal,
  handleCancel,
  addItem,
  editItem,
}) => {
  // const [form] = Form.useForm();
  // const { setFieldsValue } = form;

  const _handleCancel = () => {
    handleCancel();
  };

  const onFinish = (values) => {
    if (type === "add") {
      addItem(values);
      values = "";
    } else {
      editItem({
        ...item,
        ...values,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title={type === "add" ? "Thêm người dùng" : `Sửa người dùng ${item.name}`}
      visible={visibleModal}
      className="common-modal"
      onCancel={_handleCancel}
      footer={null}
      maskClosable={false}
    >
      <Form
        name="basic"
        labelAlign="left"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          initialValue={type === "add" ? "" : item.name}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          initialValue={type === "add" ? "" : item.age}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          initialValue={type === "add" ? "" : item.address}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEditItem;
