import React from "react";
import "../css/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <h2>
        Created By<span> Fade Ahmad</span> &copy;{new Date().getFullYear()} All
        rights reserved.
      </h2>
    </footer>
  );
}

export default Footer;
