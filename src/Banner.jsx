function Banner() {
  return (
    <>
      <div className="banner">
        <img
          src="./space-background.webp"
          alt="Space background"
          className="banner-image"
        />
        <div className="banner-heading">
          <div>
            <h2 style={{ marginLeft: "5px" }}>Digital Solutions</h2>
            <h2 style={{ marginLeft: "5px" }}>for the Modern Web</h2>
            <p>
              We design and develop innovative web applications with a focus on
              performance and user experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
