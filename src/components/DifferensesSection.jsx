import { differences } from "../data"
import Button from "./Button/Button"
import { useState } from 'react'

function DifferencesSection() {
  const [contentType, setContentType] = useState(null)

  function HandleClick(type) {
    setContentType(type)
  }
  return (
    <section style={{ marginTop: '1rem' }}>
      <h3>Наши достоинства</h3>
      <Button onClick={() => HandleClick('Approach')}>Подход</Button>
      <Button onClick={() => HandleClick('Price')}>Цена</Button>
      <Button onClick={() => HandleClick('Availability')}>Доступность</Button>
      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  )
}



export default DifferencesSection