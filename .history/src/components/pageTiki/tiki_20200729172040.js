import React from "react";
import { Row, Col, Rate } from "antd";
import "./Tiki.scss";

const datas = [
  {
    id: 1,
    name: "Điện Thoại Samsung Galaxy A11 (32GB/3GB) - Hàng Chính Hãng",
    priceOriginal: 3500000,
    priceSale: 15,
    saleCode: "SAMSUNG",
    comment: 545,
    rate: 3,
    images: [
      {
        id: 1,
        url:
          "https://salt.tikicdn.com/cache/200x200/ts/product/ba/b9/ed/7849cdbae4e493cccb77789ad9b94430.jpg",
      },
      {
        id: 2,
        url:
          "https://salt.tikicdn.com/cache/280x280/ts/product/64/79/12/3a9c37ee0c2a28bb338f63fe8ef5d148.jpg",
      },
      {
        id: 3,
        url:
          "https://salt.tikicdn.com/cache/280x280/ts/product/16/15/72/7363f6268c34387efc2d4079c537e64e.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Điện Thoại iPhone 11 64GB - Hàng Chính Hãng",
    priceOriginal: 2690000,
    priceSale: 27,
    saleCode: "IPHONE11",
    comment: 234,
    rate: 2,
    images: [
      {
        id: 1,
        url:
          "https://salt.tikicdn.com/cache/280x280/ts/product/a7/51/68/4a066d1acbb1a1b2a824b488683beac0.jpg",
      },
      {
        id: 2,
        url:
          "https://salt.tikicdn.com/cache/280x280/ts/product/21/b2/3a/3cf0cf3433d7122448bb1f90bf9b7bb0.png",
      },
      {
        id: 3,
        url:
          "https://salt.tikicdn.com/cache/280x280/ts/product/5b/b2/c4/9574b9439edac59ab025881b9e62fc18.jpg",
      },
    ],
  },
];
const Tiki = () => {
  return (
    <Row className="container-tiki">
      {datas.map((data) =>
        data.map((img) => (
          console.log("Tiki -> img", img);
          <Col span={6} key={data.id}>
            <div className="img-body">
              <img
                alt="oke"
                src="https://salt.tikicdn.com/cache/200x200/ts/product/ba/b9/ed/7849cdbae4e493cccb77789ad9b94430.jpg"
              />
            </div>
            <div className="img-style">
              <div className="wp-img">
                <img className="image-small" alt="oke" src="https://salt.tikicdn.com/cache/200x200/ts/product/ba/b9/ed/7849cdbae4e493cccb77789ad9b94430.jpg" />
              </div>
            </div>
            <div className="title">{data.name}</div>
            <span className="price--item">
              {` ${(
                data.priceOriginal -
                data.priceOriginal * (data.priceSale / 100)
              ).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })} `}
              <span className="sale-tag-square">{`${data.priceSale}%`}</span>
            </span>
            <div className="price-regular">
              {data.priceOriginal.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </div>
            <div className="review-wrap">
              <p className="rating">
                <Rate allowHalf value={data.rate} />
              </p>
              <p className="review">({`${data.comment} nhận xét`})</p>
            </div>
          </Col>
        ))
      )}
    </Row>
  );
};

export default Tiki;
