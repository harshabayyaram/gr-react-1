function Header() {
  return (
    <header>
      <nav className="header">
        <img src="logo.png" className="header-logo" />
        <ul className="header-list">
          <li>About Us</li>
          <li>Daily-News</li>
          <li>Weekly-News</li>
          <li>Contact-Us</li>
          <li>Subscribe</li>
        </ul>
      </nav>
    </header>
  );
}

function MainBody() {
  return (
    <div className="main-div">
      <h1 className="heading">Latest news on technology</h1>
      <div className="sub-div">
      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 1</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 2</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 3</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 4</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 5</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 6</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 7</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 8</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 9</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 11</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 12</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 13</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 14</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 15</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Tech news 16</div>
      </div>

      <div class="gallery">
        <img src="logo.png" width="600" height="400" />

        <div class="desc">Add a description of the image here</div>
      </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer className="footer">
        <ul className="footer-list">
          <li>About Us</li>
          <li>Daily-News</li>
          <li>Weekly-News</li>
          <li>Contact-Us</li>
          <li>Subscribe</li>
        </ul>
        <small>© Running Development Inc 2001 </small>
      </footer>
    </div>
  );
}

function Page() {
  return (
    <div className="container">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
