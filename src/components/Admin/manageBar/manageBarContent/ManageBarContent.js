import {ListGroup} from 'react-bootstrap';
import "../../../../styles/admin/manageBar/manageBar.css"
import ManageBarContentItem from './ManageBarContentItem';
import { useState } from 'react';


function ManageBarContent({admin}) {

  const [isClicked, setIsClicked] = useState(1)

  return (
    <>
      {
        admin && (
            <ListGroup className='manageBarContentList' as="ul">
              <ManageBarContentItem number={1} content="QR Hazırla" path='/admin' isClicked={isClicked} handleClick={() => setIsClicked(1)} />
      
              <ManageBarContentItem number={2} content="Menüyü Düzenle" path='createMenu' isClicked={isClicked} handleClick={() => setIsClicked(2)} />
    
              <ManageBarContentItem number={3} content="Sipariş Görüntüle" path='manageOrders' isClicked={isClicked} handleClick={() => setIsClicked(3)} />
    
              <ManageBarContentItem number={4} content="Grafik Görüntüle" path='graphics' isClicked={isClicked} handleClick={() => setIsClicked(4)} />
    
              <ManageBarContentItem number={5} content="Personel Görüntüle / Oluştur" path='manageUser' isClicked={isClicked} handleClick={() => setIsClicked(5)} />
    
              <ManageBarContentItem number={6} content="Profil" path='profile' isClicked={isClicked} handleClick={() => setIsClicked(6)} />
            
              <ManageBarContentItem number={7} content="Yayını yönet" path='manageStream' isClicked={isClicked} handleClick={() => setIsClicked(7)} />
            </ListGroup>
          )
        }

        {
          !admin && (
            <ListGroup className='manageBarContentList' as="ul">
              <ManageBarContentItem number={1} content="Siparişleri Yönet" path='/staff' isClicked={isClicked} handleClick={() => setIsClicked(1)} />
      
              <ManageBarContentItem number={8} content="Profil" path='profile' isClicked={isClicked} handleClick={() => setIsClicked(8)} />
    
              <ManageBarContentItem number={10} content="Yayını yönet" path='manageStream' isClicked={isClicked} handleClick={() => setIsClicked(10)} />
            </ListGroup>
          )
        }
    </>
  )
}

export default ManageBarContent