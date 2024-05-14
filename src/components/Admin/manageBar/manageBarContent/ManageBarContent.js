import {ListGroup} from 'react-bootstrap';
import "../../../../styles/admin/manageBar/manageBar.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';


function ManageBarContent() {

  const [isClicked, setIsClicked] = useState(1)

  return (
    <>
    <ListGroup className='manageBarContentList' as="ul">
      <Link className='adminLink' to="/admin"><ListGroup.Item active={isClicked === 1} onClick={() => setIsClicked(1)} className="manageBarContentListItem" as="li">QR Hazırla</ListGroup.Item></Link>
      
      <Link className='adminLink' to="404"><ListGroup.Item active={isClicked === 2} onClick={() => setIsClicked(2)} className="manageBarContentListItem"  as="li">Sipariş Görüntüle</ListGroup.Item></Link>
 
      <Link className='adminLink' to="graphics"><ListGroup.Item active={isClicked === 3} onClick={() => setIsClicked(3)} className="manageBarContentListItem"  as="li">Grafik Görüntüle</ListGroup.Item></Link>

      <Link className='adminLink' to="usermanage"><ListGroup.Item active={isClicked === 4} onClick={() => setIsClicked(4)} className="manageBarContentListItem"  as="li">Personel Görüntüle / Oluştur</ListGroup.Item></Link>

      <Link className='adminLink' to="404"><ListGroup.Item active={isClicked === 5} onClick={() => setIsClicked(5)} className="manageBarContentListItem"  as="li">Profil</ListGroup.Item></Link>
    </ListGroup>
    </>
  )
}

export default ManageBarContent