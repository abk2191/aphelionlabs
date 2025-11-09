function Description() {
  return (
    <>
      <div className="desc-cards-container">
        <div className="desc-card">
          <div className="desc-logo">
            <i class="fa-solid fa-code"></i>
            <h3 style={{ fontSize: "30px", color: "black" }}>
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
              Custom web application development
            </p>
            <p
              style={{
                color: "grey",
                fontSize: "26px",
                textAlign: "center",
                lineHeight: "1.6",
                fontFamily: "Inter, sans-serif",
              }}
            >
              tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
