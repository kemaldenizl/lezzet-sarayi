import React from 'react'
import QRCode from 'react-qr-code';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import "../../../styles/admin/qrPage.css"
import { MuiColorInput } from 'mui-color-input';


function QRAdminPage() {

  const domain = window.location.hostname;
  const domainUzantisi = domain.split('.').pop(); 
  const webUrlFirst = window.location.href
  const webUrlSecond = webUrlFirst.slice(0,-6)
  const webUrlThird = webUrlSecond+domainUzantisi
  const webUrl= webUrlThird.slice(0,-3)

  const [value, setValue] = useState(webUrl);
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(350);
  console.log(webUrl)

  const print = () => {
      const divToPrint = document.getElementById("qr")
      const printWindow = window.open('');
      printWindow.document.write('<html><head></head><body>');
      printWindow.document.write(divToPrint.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print()
    
  }

  return (
    <div className='qrScreen'>         
      <div className='qrItems'>
      <div className='qrMenu'>
        <div className='qrInputs'>

          <div className='qrColorPicker' >
            <input class="form-control form-control-color" type="color" value={back} onChange={(e) => setBack(e.target.value)}/>             
            <label>QR kodun arka plan rengini seçiniz</label>
          </div>

          <div className='qrColorPicker'>
            <input class="form-control form-control-color" type="color" value={fore} onChange={(e) => setFore(e.target.value)} />
            <label>QR kodun çizgi rengini seçiniz</label>
          </div>

          <div className='qrRange' >
            <input type="range" className='form-control form-range' min={350} max={500} onChange={(e) => setSize(parseInt(e.target.value === '' ? 0 : e.target.value, 10))} />
            <label>QR kodun boyutunu seçiniz</label> 
          </div>

        </div>
        <div id='qr'><QRCode title="test" value={value} bgColor={back} fgColor={fore} size={size} /></div>
      </div>
      <div className="d-grid gap-2 qrButton"><Button variant="primary" size="lg" onClick={print}>Yazdır</Button></div>  
      </div>          
    </div>
  )
}

export default QRAdminPage