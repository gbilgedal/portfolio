import React, { useState } from "react";
import "./index.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";

const ContactViaIconComponent = () => {
  return (
    <div className="contactVia">
      <a
        rel="noopener noreferrer"
        href="https://github.com/gbilgedal/"
        target="_blank"
      >
        <GitHubIcon className="navIconGit" />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://tr.linkedin.com/in/gbilgedal"
        target="_blank"
      >
        <LinkedInIcon
          className="navIconSvg"
        />
      </a>
      <a rel="noopener noreferrer" href="http://t.me/ahripol" target="_blank">
        <TelegramIcon fontSize="small" className="navIconSvg" />
      </a>
    </div>
  );
};

export default ContactViaIconComponent;
