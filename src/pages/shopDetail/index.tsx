import React, { useEffect } from "react";

import { RootState } from "store/configureStore";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ShopActionCreators } from "store/shop/action";
import { Empty, List } from "antd";

import { Card, Button } from "components";

interface Props {}

const ShopDetailPage: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShopActionCreators.getAll.request());
  }, []);

  const { id } = useParams();

  const currentShop = useSelector(
    (state: RootState) => state.shop.store.stores.all
  ).find((item) => String(item._id) === id);

  if (!currentShop) {
    return <Empty />;
  }

  const { menu = [] } = currentShop;

  console.log("currentShop", currentShop);
  return (
    <div
      style={{
        padding: 30,
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <List itemLayout="vertical">
        {menu.map((item, index) => (
          <Card
            key={index}
            style={{
              width: 800,
            }}
          >
            <div style={{ display: "flex" }}>
              <b style={{ fontSize: 24 }}>
                {item.name} : {item.price} 원
              </b>

              <Button type="primary" style={{ marginLeft: "auto" }}>
                구매하기
              </Button>
            </div>

            <video
              width={200}
              autoPlay
              height={200}
              src={`https://manage-live.s3.ap-northeast-2.amazonaws.com/${id}_${item.name}.mp4`}
            />
          </Card>
        ))}
      </List>
    </div>
  );
};

export default ShopDetailPage;
