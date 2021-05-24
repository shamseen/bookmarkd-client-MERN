import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import "../styles/infoPanel.scss";

export default function InfoPanel() {
  return (
    <div id="infoPanel">
      <hr />
      <div id="links">

        <Link href="#" onClick={(e) => e.preventDefault()}>
          <GitHubIcon fontSize="large" />
          <br />
          Src
        </Link>
        <Link href="https://github.com/shamseen/bookmarkd-api-MERN" onClick={(e) => e.preventDefault()}>
          <GitHubIcon fontSize="large" />
          <br />
          API
        </Link>
        <Link href="https://shamseen.netlify.app/" onClick={(e) => e.preventDefault()}>
          <PersonPinIcon fontSize="large" />
          <br />
          Moi
        </Link>
      </div>

    </div>
  )
}