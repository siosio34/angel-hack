import React, { useEffect } from "react";
import { Button, Card, Title } from "components";

import { Input, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShopActionCreators } from "store/shop/action";
import { RootState } from "store/configureStore";
import { Link } from "react-router-dom";

interface Props {}

const ShopPage: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShopActionCreators.getAll.request());
  }, []);

  const stores = useSelector((state: RootState) => state.shop.store.stores);

  const { all, live } = stores;

  console.log(
    all.filter((item) => live.some((liveItem) => liveItem.storeId === item._id))
  );

  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 250,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2Fca49c4a40b734b89b46a3fc5cf01f3d1.jpg)`,
        }}
      >
        <Title level={2}>치아바타로 실패없는 배달을 시켜보세요!</Title>
      </div>

      <div style={{ padding: 100 }}>
        <Title level={1}>Live</Title>

        <div style={{ display: "flex" }}>
          {all
            .filter((item) =>
              live.some((liveItem) => liveItem.storeId === item._id)
            )
            .map((item, index) => (
              <Link
                to={`/shops/streeming/${
                  live.find((liveItem) => liveItem.storeId === item._id)
                    ?.channelName
                }`}
              >
                <Card
                  key={`item_live${index}`}
                  style={{ width: 250, height: 250, marginRight: 16 }}
                >
                  {item.name}
                </Card>
              </Link>
            ))}
        </div>

        <Divider />
        <Title level={2}>영업중 가게</Title>
        <div style={{ display: "flex" }}>
          {all.map((item, index) => (
            <Link to={`/shops/${item._id}`}>
              <Card
                key={`item${index}`}
                style={{ width: 250, height: 250, marginRight: 16 }}
              >
                {item.name}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
