function Description() {
  return (
    <>
      <div className="desc-cards-container">
        <div className="desc-card">
          <div className="desc-logo">
            <i class="fa-solid fa-code" style={{ fontSize: "28px" }}></i>
            <h3
              style={{
                fontSize: "25px",
                color: "#2c3e50",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Web Development
            </h3>
          </div>

          <div className="desc-p-div">
            <p
              style={{
                color: "grey",
                fontSize: "26px",
                textAlign: "center",
                lineHeight: "1.6",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Custom web application development tailored to your business needs
            </p>
          </div>
        </div>{" "}
        <div className="desc-card">
          <div className="desc-logo">
            <i
              class="fa-solid fa-pencil"
              style={{
                backgroundColor: "green",
                color: "white",
                border: "1px solid green",
              }}
            ></i>
            <h3
              style={{
                fontSize: "25px",
                color: "#2c3e50",
                fontFamily: "Inter, sans-serif",
              }}
            >
              UI Design
            </h3>
          </div>

          <div className="desc-p-div">
            <p
              style={{
                color: "grey",
                fontSize: "26px",
                textAlign: "center",
                lineHeight: "1.6",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Crafting intuitive and visually appealing user interfaces
            </p>
          </div>
        </div>{" "}
        <div className="desc-card">
          <div className="desc-logo">
            <i
              class="fa-solid fa-toolbox"
              style={{
                backgroundColor: "red",
                color: "white",
                border: "1px solid red",
              }}
            ></i>
            <h3
              style={{
                fontSize: "25px",
                color: "#2c3e50",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Full-Stack Engineering
            </h3>
          </div>

          <div className="desc-p-div">
            <p
              style={{
                color: "grey",
                fontSize: "26px",
                textAlign: "center",
                lineHeight: "1.6",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Building fast and responsive mobile and web apps both front-end
              and back-end
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
