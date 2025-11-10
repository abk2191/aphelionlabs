function MVP() {
  return (
    <>
      <div className="mvp">
        <h2>Our MVP Product</h2>
        <div className="mvp-prod-desc">
          <p>
            <strong>Slate</strong> - The note app.{" "}
            {/* Create, edit, delete, and pin
            notes, Auto-save with smooth animations, Persistent colors, icons,
            and layout states after reload, Clean, distraction-free interface. */}
          </p>
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
