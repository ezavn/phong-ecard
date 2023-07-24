import { useState } from "react";

/* eslint-disable react/jsx-no-target-blank */
function App() {
  const [showLink1, setShowLink1] = useState(false);
  const [showLink2, setShowLink2] = useState(false);
  const [showLink3, setShowLink3] = useState(false);

  const activeLink1 = () => {
    setShowLink1(true);
    setShowLink2(false);
    setShowLink3(false);
  };
  const activeLink2 = () => {
    setShowLink1(false);
    setShowLink2(true);
    setShowLink3(false);
  };
  const activeLink3 = () => {
    setShowLink1(false);
    setShowLink2(false);
    setShowLink3(true);
  };

  return (
    <>
      <div className="card" data-state="#about">
        <div className="card-header">
          <div className="card-cover"></div>
          <img className="card-avatar" src="/phong-ava.png" alt="avatar" />
          <h1 className="card-fullname">VŨ ĐỨC PHONG</h1>
          <h1 className="card-company">CÔNG TY CỔ PHẦN ISTUDIO VIETNAM</h1>
          <h2 className="card-jobtitle">Giám Đốc Kinh Doanh</h2>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">SỨ MỆNH</div>
              <div className="content">
                {/* <p className="card-desc">
                  Giá trị cốt lõi - KHÁCH HÀNG LÀ SỐ 1
                </p> */}
                <p className="card-desc">
                  iStudio - Viện Anh ngữ Quốc Tế Online là cầu nối bền vững, dài
                  lâu cho con em địa phương tiến gần hơn với kiến thức, công
                  nghệ để phát triển trình độ Anh ngữ cho trẻ giai đoạn sớm,
                  mang văn hóa đa sắc tộc từ đội ngũ Giảng viên khắp Thế Giới
                  đến mọi vùng miền.
                </p>
                {/* <p className="card-desc">
                  WOW tự hào đã và đang tư vấn, triển khai các giải pháp
                  Marketing Online cho các doanh nghiệp thuộc đa lĩnh vực như
                  BCA Group, BNI, ActionCOACH, CorporateConnections, Hiệp Hội
                  Thiết Kế TP. HCM - VDAS, VMS, Mega Wine, Golden Star Travel,
                  Đại lý thuế Sài Nam, Nội thất XHOME, Đồng hồ Julius, Nệm cao
                  cấp TonyBed, Mekong Princess, ...
                </p> */}
              </div>
            </div>
            <div className="card-social">
              <a href="https://www.facebook.com/vuducphong.net" target="_blank">
                <img src="/icons/facebook.png" alt="" />
              </a>
              <a href="http://zalo.me/0963367173" target="_blank">
                <img src="/icons/zalo.png" alt="" />
              </a>
              <a href="viber://add?number=84963367173" target="_blank">
                <img src="/icons/viber.png" alt="" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=0963367173"
                target="_blank"
              >
                <img src="/icons/whatsapp.png" alt="" />
              </a>
              <a href="mailto:heads@i-studio.com.vn">
                <img src="/icons/mail.png" alt="" />
              </a>
            </div>
          </div>
          <div className="card-buttons">
            {/* <button
              onClick={() => activeLink1(true)}
              data-section="#about"
              className={`${showLink1 ? "is-active" : ""}`}
            >
              ABOUT
            </button> */}
            <a
              onClick={() => activeLink1(true)}
              className={`${showLink1 ? "is-active" : ""}`}
              href="https://i-studio.com.vn/"
              target="_blank"
              data-section="#experience"
            >
              WEBSITE
            </a>
            <a
              onClick={() => activeLink2(true)}
              className={`${showLink2 ? "is-active" : ""}`}
              href="https://hcm.bni.vn/hcm-bni-plu$/vi-VN/memberdetails?encryptedMemberId=XhEx%2FPs%2FDJ55lauvAJ%2FPtA%3D%3D&cmsv3=true&name=V%C5%A9+%C4%90%E1%BB%A9c+Phong"
              target="_blank"
              data-section="#experience"
            >
              HỒ SƠ NĂNG LỰC
            </a>
            {/* <a
              onClick={() => activeLink3(true)}
              className={`${showLink3 ? "is-active" : ""}`}
              href="https://drive.google.com/file/d/17VXDdRsMkRbEMZtSpisSSO3ryUbpXWIm/view"
              target="_blank"
              data-section="#contact"
            >
              BROCHURE
            </a> */}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <a className="btn-download" href="/files/vu-duc-phong.vcf" download>
          Lưu danh bạ
        </a>
      </div>
    </>
  );
}

export default App;
