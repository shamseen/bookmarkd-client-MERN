import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import "../styles/infoPanel.scss";

export default function InfoPanel() {
  return (
    <div id="infoPanel">
      <hr />
      <div id="links">
        <Link href="https://github.com/shamseen/bookmarkd-client-MERN" target="_blank">
          <GitHubIcon fontSize="large" />
          <br />
          Src
        </Link>
        <Link href="https://github.com/shamseen/bookmarkd-api-MERN" target="_blank">
          <GitHubIcon fontSize="large" />
          <br />
          API
        </Link>
        <Link href="https://shamseen.netlify.app/" target="_blank">
          <PersonPinIcon fontSize="large" />
          <br />
          Moi
        </Link>
      </div>

    </div>
  )
}
