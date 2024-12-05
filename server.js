import express from 'express';

const app = express();
/* informa que os dados a serem trabalhados será em formatação JSON */
app.use(express.json()); 

app.get('/usuarios', (req, res) => {
    console.log(req.body);
    res.status(201).json(req.body);
});

app.post('/usuarios', (req, res) => {
    res.status(200).send('Ok, deu bom');
});

app.listen(3000, () => {
    console.log('Servidor escutando na porta padrão 3000');
});

