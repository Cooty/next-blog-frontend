import {Image} from "react-bootstrap";
import {Media} from "./Media/Media";

const AuthorInfo = () =>
    <Media className="mb-4 admin-intro">
        <Media.Figure>
            <Image
                roundedCircle
                width={64}
                height={64}
                src="https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4"
                alt="Generic placeholder"
            />
        </Media.Figure>
        <Media.Body as="div">
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
                My name is Filip Jerga and I am an experienced software engineer and freelance developer.
                and this is my blog page.
            </p>
        </Media.Body>
    </Media>

export default AuthorInfo;
