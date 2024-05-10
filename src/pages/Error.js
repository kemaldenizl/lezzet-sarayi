import { Link } from "react-router-dom"

function Error() {
  return (
    <>
        <div>Hatalı giriş yaptınız.</div>
        <div>Hata sayfası henüz hazırlanmadı</div>
        <div><Link to="/">Ana sayfaya dön</Link></div>
    </>
  )
}

export default Error