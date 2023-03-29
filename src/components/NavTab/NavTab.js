import { FormattedMessage } from "react-intl";
import "./NavTab.css";

function NavTab() {

    return (
        <div className="navtab">
            <div className="button navtab__button">
                <a href="#project" className="link navtab__button-link">
                    <FormattedMessage id="navtab__about" />
                </a>
            </div>
        </div>
    );
};

export default NavTab;
