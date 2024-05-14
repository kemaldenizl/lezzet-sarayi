import React from 'react'
import QRCode from 'react-qr-code';
import { useState } from 'react';

function QRAdminPage() {

  const domain = window.location.hostname;
  const domainUzantisi = domain.split('.').pop(); 
  const webUrlFirst = window.location.href
  const webUrlSecond = webUrlFirst.slice(0,-6)
  const webUrl = webUrlSecond+domainUzantisi

  const [value, setValue] = useState(webUrl);
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(256);
  console.log(webUrl)

  return (
    <div>         
      <input type="text" onChange={(e) => setBack(e.target.value)} placeholder="Background of Qr-code" />
      <br />   
      <input type="text" onChange={(e) => setFore(e.target.value)} placeholder="Foreground of Qr-code" />
      <br />              
      <input type="number" onChange={(e) => setSize(parseInt(e.target.value ==='' ? 0 : e.target.value, 10))} placeholder="Size of Qr-code" />
      <br />          
      {  value && (<QRCode title="test" value={value} bgColor={back} fgColor={fore} size={size} /> ) }              
    </div>
  )
}

export default QRAdminPage