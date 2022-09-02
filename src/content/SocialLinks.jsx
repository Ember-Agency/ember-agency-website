import discordIcon from "../assets/icon-discord.svg";
import telegramIcon from "../assets/icon-telegram.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import twitchIcon from "../assets/icon-twitch.svg";

export const discord = "https://discord.gg/BVFZ6gTcYn";
export const telegram = "https://t.me/ember_token_io";
export const twitter = "https://twitter.com/EmberAgencyIO";
export const instagram = "https://www.instagram.com/emberagency.io/";
export const twitch = "https://www.twitch.tv/emberagency";

export const DiscordLink = () => {
  return (
    <a className="btn" href={discord} rel="noreferrer" target="_blank">
      <span>Discord</span>
    </a>
  );
};

export const TelegramLink = () => {
  return (
    <a className="btn" href={telegram} rel="noreferrer" target="_blank">
      <span>Telegram</span>
    </a>
  );
};

export const SocialIcons = () => {
  // TODO: Update icons to use SVG or sprite
  // TODO: which is more performant?
  return (
    <div className="social-links">
      <a
        href={telegram}
        rel="noreferrer"
        target="_blank"
        title="Join us on Telegram"
      >
        <img src={telegramIcon} alt="Ember Agency - Telegram" />
      </a>
      <a
        href={discord}
        rel="noreferrer"
        target="_blank"
        title="Join us on Discord"
      >
        <img src={discordIcon} alt="Ember Agency - Discord" />
      </a>
      <a
        href={twitch}
        rel="noreferrer"
        target="_blank"
        title="Join us on Twitch"
      >
        <img src={twitchIcon} alt="Ember Agency - Twitch" />
      </a>
      <a
        href={twitter}
        rel="noreferrer"
        target="_blank"
        title="Follow us on Twitter"
      >
        <img src={twitterIcon} alt="Ember Agency - Twitter" />
      </a>
      {/* <a href={instagram} rel="noreferrer" target="_blank">
        <img src={instagramIcon} alt="Ember Agency - Instagram" />
      </a> */}
    </div>
  );
};
