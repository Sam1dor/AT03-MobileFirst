import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Perguntas.css"

export default function Perguntas( {usuarioPergunta, perguntaFeita, respostaPergunta, dataPergunta, perguntaRelacionada, respostaRelacionada, usuarioPergunta2, perguntaFeita2, dataPergunta2, perguntaRelacionada2, respostaRelacionada2, respostaPergunta2, usuarioPergunta3, perguntaFeita3, dataPergunta3, perguntaRelacionada3, respostaRelacionada3, respostaPergunta3 }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 
  return (
    <div className='perguntas__container'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {usuarioPergunta}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Pegunta: {perguntaFeita}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: 16, color: 'red' }}>
            R.: {respostaPergunta}
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'grey', fontWeight: 700 }}>
            Data: {dataPergunta}
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'grey' }}>
            Pergunta Relacionada: {perguntaRelacionada}
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'darkred' }}>
            R.: {respostaRelacionada}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {usuarioPergunta2}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Pegunta: {perguntaFeita2}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: 16, color: 'red' }}>
            R.: {respostaPergunta2}
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'grey', fontWeight: 700 }}>
            Data: {dataPergunta2}
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'grey' }}>
            Pergunta Relacionada: {perguntaRelacionada2}
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'darkred' }}>
            R.: {respostaRelacionada2}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {usuarioPergunta3}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Pegunta: {perguntaFeita3}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: 16, color: 'red' }}>
            R.: {respostaPergunta3}
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'grey', fontWeight: 700 }}>
            Data: {dataPergunta3}
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'grey' }}>
            Pergunta Relacionada: {perguntaRelacionada3}
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'darkred' }}>
            R.: {respostaRelacionada3}
          </Typography>
        </AccordionDetails>
      </Accordion>
  
    </div>
  );
}