import React from 'react'
import QRCode from 'react-qr-code';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "../../../styles/admin/qrPage.css"


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
    <Container className='h-100 d-flex align-items-center justify-content-center'>
      <Row className='gap-3'>
        <Col className='bg-black d-flex flex-column justify-content-center gap-3 p-3'>
          <div className='d-flex gap-2 align-items-center border p-2'>
            <input class="form-control form-control-color" type="color" value={back} onChange={(e) => setBack(e.target.value)}/>
            <label class="form-label text-white">QR kodun arka plan rengini seçiniz</label>
          </div>

          <div className='d-flex gap-2 align-items-center border p-2'>
            <input class="form-control form-control-color" type="color" value={fore} onChange={(e) => setFore(e.target.value)} />
            <label class="form-label text-white">QR kodun çizgi rengini seçiniz</label>
          </div>

          <div className='d-flex flex-column border p-2 align-items-center'>
            <input type="range" className='form-control form-range' min={350} max={700} onChange={(e) => setSize(parseInt(e.target.value === '' ? 0 : e.target.value, 10))} />
            <label className="col-form-label text-white w-70">QR kodun boyutunu seçiniz</label>
          </div>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={print}>Yazdır</Button>
          </div>
        </Col>

        <Col id="qr">
          <QRCode title="test" value={value} bgColor={back} fgColor={fore} size={size} />
        </Col>

      </Row>
    </Container>
  )
}

export default QRAdminPage