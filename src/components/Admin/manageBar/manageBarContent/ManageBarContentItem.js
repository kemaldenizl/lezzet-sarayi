import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../../../../styles/admin/manageBar/manageBar.css"

function ManageBarContentItem({number,content,path,isClicked,handleClick}) {

    return (
        <Link className='adminLink' to={path}>
            <ListGroup.Item active={isClicked === number} onClick={handleClick} className="manageBarContentListItem"  as="li">{content}</ListGroup.Item>
        </Link>
    )
}

export default ManageBarContentItem