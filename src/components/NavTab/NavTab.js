import "./NavTab.css";

function NavTab() {

    const location = "location.href";
   function redirect() {
    location ='#project';
   }

    return (
        <div className="navtab">
            <div className="button navtab__button">
                <a href="#project" className="navtab__button-link link">
                    Узнать больше
                </a>
            </div>
        </div>
    );
};

export default NavTab;

               /* <a href="#project" className="navtab__button-link link">
                    Узнать больше
                </a>
                onClick="location.href='#project'"
                
                */