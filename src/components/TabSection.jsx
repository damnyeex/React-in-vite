import Button from "./Button/Button"

function TabSection({ onChange }) {
    return (
        <section style={{ marginTop: '1rem' }}>
            <Button onClick={() => onChange('main')}>Главная</Button>
            <Button onClick={() => onChange('feedback')}>Обратная связь</Button>
            <Button onClick={() => onChange('effect')}>Effect</Button>
        </section>
    )
}



export default TabSection