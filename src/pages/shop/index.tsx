import React from "react";
import { Button, Card, Title } from "components";
import { url } from "inspector";
import { Input } from "antd";
interface Props {}

const ShopPage: React.FC<Props> = () => {
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
        <Title level={2}>치아바타로 당신이 먹고 싶은 음식을 찾아보세요!</Title>
      </div>

      <div style={{ padding: 24 }}>
        <Title level={3}>Live</Title>

        <iframe
          width={300}
          height={300}
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
        />
        <Title level={3}>광고중</Title>
      </div>
    </div>
  );
};

export default ShopPage;
