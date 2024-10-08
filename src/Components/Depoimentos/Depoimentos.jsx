import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ title, imgSrc, text }) => (
    <div className="card" style={{ margin: '10px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div className="card-body" style={{ padding: '20px' }}>
            <h5 className="card-title" style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</h5>
            <p className="card-text" style={{ fontSize: '14px', color: '#555' }}>{text}</p>
        </div>
    </div>
);

function Depoimentos() {
    const usersFeedback = [
        { title: 'Rosi Lima da Silva', text: 'Ótimo Atendimento ao Cliente!' },
        { title: 'Pedro Nogueira Porto', text: 'Ótima Experiência, Entrega Rápida!' },
        { title: 'Giovanna Rodrigues', text: 'Demora na Entrega, Mas Boa Variedade de Opções' },
        { title: 'Maria Paula Santos Oliveira', text: 'Boas Promoções, mas as Taxas São Altas' },
    ];

    const handleSubmit = () => {
        alert("Mensagem enviada, obrigada pelo feedback!");
    };

    return (
        <div className="container">
            <h2 style={{ marginTop: '30px' }}>Deixe sua avaliação:</h2>
            <input type="text" placeholder="Digite sua avaliação:" />
            <button onClick={handleSubmit}>Enviar</button>

            <div className="cards">
                <h5 style={{ marginTop: '30px' }}>Veja algumas avaliações:</h5>
                <div className="card-container">
                    {usersFeedback.map((feedback, index) => (
                        <Card key={index} title={feedback.title} text={feedback.text} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Depoimentos;
