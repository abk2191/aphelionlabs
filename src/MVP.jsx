function MVP() {
  const features = [
    "Create, edit, delete, and pin notes",
    "Auto-save with smooth animations",
    "Persistent colors, icons, and layout states after reload",
    "Clean, distraction-free interface",
    "Video Backgrounds you can select according to your mood",
  ];

  return (
    <>
      <div className="mvp">
        <h2 style={{ color: "#2c3e50" }}>Our MVP Product</h2>
        <div className="mvp-prod-desc">
          <p>
            <strong>Slate</strong> - The note app.
          </p>
        </div>

        {/* Features Section */}
        <div className="features-container">
          <h3 className="features-title">Key Features</h3>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <i className="fa-solid fa-check feature-icon"></i>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <video width="640" height="360" controls className="video">
            <source src="slate.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default MVP;
