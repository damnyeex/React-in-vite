import { useState, useRef } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"

function StateUseRef(){
    const input = useRef()
    const [show, setShow] = useState(false)
    
    function handleKeyDown(event){
        if (event.key === 'Enter'){
            setShow(true)
        }
    }
    return(
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input ref={input} type='text' onKeyDown={handleKeyDown} className="control"></input>
        </div>
    )
}

function FeedBackSection(){
  const [sendModal, setSendModal] = useState(false)
  /*const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [message, setMessage] = useState('')
  const [reason, setReason] = useState('rate')
  const [hasError, setHasError] = useState(false)*/
  const [form, setForm] = useState({
    name: '',
    surname: '', 
    message: '',
    reason: 'rate',
    hasError: false
  })
  

    function handleNameChange(event){
        setForm(prev => ({
            ...prev, 
            name : event.target.value,
            hasError : event.target.value.trim().length === 0,
        }))
    }

    function handleSurnameChange(event) {
        setForm(prev => ({
            ...prev,
            surname : event.target.value,
            hasError : event.target.value.trim().length === 0,
        }))
    }

    function handleMessageChange(event) {
       setForm(prev => ({
        ...prev,
        message : event.target.value,
        hasError : event.target.value.trim().length === 0,
       }))
    }
     
    function openSendModal() {
        setSendModal(true);
      }

      function handleSendSubmit(event) {
        event.preventDefault();
        openSendModal();
      }

    return(
        <section>
            <h3>Обратная связь</h3>
            <form className="feedbackform" style={{marginBottom: '1rem'}} onSubmit={handleSendSubmit}>
                
        <label htmlFor="name">Имя</label>
        <input type="text" id="name" className="control" placeholder="Введите ваше имя" value={form.name}  onChange={handleNameChange} 
        style={{
            border: form.hasError ? '1px solid red' : null,
        }}
        ></input>
        <label htmlFor="surname">Фамилия</label>
        <input type="text" id="surname" className="control" placeholder="Введите вашу фамилию" value={form.surname} onChange={handleSurnameChange}
        style={{
            border: form.hasError ? '1px solid red' : null,
        }}
        ></input>
        <label htmlFor="message">Сообщение</label>
        <textarea id = "message" className="control" placeholder="Введите сообщение" value={form.message} onChange={handleMessageChange}
        style={{
            border: form.hasError ? '1px solid red' : null,
        }}
        ></textarea>

        <label htmlFor="reason">Тема обращения</label>
        <select id="reason" className="control" value={form.reason} onChange={(event) => setForm((prev) => ({...prev, reason:event.target.value}))
        }>
        <option value="rate">Оценить качество обслуживания</option>
        <option value="supply">Узнать о поступлениях</option>
        <option value="suggest">Предложение</option>
             </select>
                
                {/*<pre>{JSON.stringify(form,null,2)}</pre>*/}
            
            <Button type="submit" disabled={form.hasError}>Отправить</Button>
            <Modal open={sendModal}>
            <h3>Благодарим вас за обратную связь!</h3>
            <p>Теперь вам на почту будет приходить самая актуальная информация</p>
            <Button onClick={() => setSendModal(false)}>Назад</Button>
            </Modal>
            </form>
            <StateUseRef/>
        </section>
    )
}



export default FeedBackSection