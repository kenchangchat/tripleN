import React, { useState, useEffect } from "react";
import "./scss/Detail.scss";
import { Carousel, Tabs, Card } from "antd";
const { TabPane } = Tabs;
const { Meta } = Card;
import { Link } from "react-router-dom";
import News from "./img/ภาพ News 1.png";
import H1 from "./img/h1.png";
import H2 from "./img/h2.png";
import H3 from "./img/h3.png";
import H4 from "./img/h4.png";
import D1 from "./img/d-1.jpg";
import D2 from "./img/d-2.jpg";
import D3 from "./img/d-3.jpg";
import D4 from "./img/d-4.jpg";

const contentStyle = {
  height: "320px",
  width: "708px",
  color: "#fff",
  lineHeight: "320px",
  textAlign: "center",
};

const arrContent = [
  {
    id: 1,
    title: "มาตรฐานสีของสายไฟ",
    content: "มาตรฐานสีของสายไฟ เรื่องสำคัญด้านความปลอดภัย ที่ช่างทุกคนควรรู้..",
    img: D1,
  },
  {
    id: 2,
    title: "สาย IEC 53 และ VCT ต่างกันอย่างไร ",
    content: "แม้หน้าตาและโครงสร้างของสายทั้งสองนั้น จะเป็นสายตัวนำทองแดงฝอย หุ้มด้วย..",
    img: D2,
  },
  {
    id: 3,
    title: "เคล็ดลับ อ่าน Marking บนสายไฟ ที่ช่างไฟต้องรู้ ",
    content: "เพราะสายไฟในท้องตลาดส่วนใหญ่หากดูภายนอกแล้วมีหน้าตาที่แทบจะคล้ายกันหมด..",
    img: D3,
  },
  {
    id: 4,
    title: "วิธีเลือกซื้อสายไฟ ต้องดูที่อะไรถึงจะได้สายไฟคุณภาพดี",
    content: "เพราะเรื่องสายไฟ ไม่ใช่อะไรก็ได้ ถ้าไม่อยากเลือกพลาดจนอาจเกิดอันตราย..",
    img: D4,
  },
];

function NewsDetail() {
  const [dotPosition, setDotPosition] = useState("left");
  const [contents, setContent] = useState(arrContent);

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="news_page">
      <div className="news_page__container">
        <div className="news_page__title">
          <h2>ข่าวสารและกิจกรรม</h2>
        </div>
        <div className="news_page__img">
          <div className="slider_news">
            <Carousel autoplay dotPosition={dotPosition}>
              <div>
                <img style={contentStyle} src={H1} alt="" />
              </div>
              <div>
                <img style={contentStyle} src={H2} alt="" />
              </div>
              <div>
                <img style={contentStyle} src={H3} alt="" />
              </div>
              <div>
                <img style={contentStyle} src={H4} alt="" />
              </div>
            </Carousel>
          </div>
          <div className="slider_detail">
            <h2>CONTENT DETAIL</h2>
          </div>
        </div>
        <div className="tab_news">
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="เกร็ดความรู้" key="1">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridGap: "1rem",
                }}
              >
                {contents.map((content, i) => (
                  <Link to={`/news-page/${content.id}`}>
                    <Card
                      hoverable
                      style={{
                        width: "330px",
                      }}
                      cover={<img alt="example" src={content.img} />}
                    >
                      <Meta
                        title={content.title}
                        description={content.content}
                      />
                    </Card>
                  </Link>
                ))}
              </div>
            </TabPane>
            <TabPane tab="ข่าวสาร" key="2">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridGap: "1rem",
                }}
              >
                {contents.map((content, i) => (
                  <Link to={`/news-page/${content.id}`}>
                    <Card
                      hoverable
                      style={{
                        width: "330px",
                      }}
                      cover={<img alt="example" src={content.img} />}
                    >
                      <Meta
                        title={content.title}
                        description={content.content}
                      />
                    </Card>
                  </Link>
                ))}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
