import './App.css';
import Text from'./components/text/text'
import Button from './components/Button/button';

function App() {
  return (
    <>
      <h1>Quest React Base</h1>
      <Text text='sou um texto estilizado' textStyle='uppercase' color='red'/>
      <Text textStyle='lowercase' color='#FFFFFF'/>
      <Button label='Baixar Programa'/>
      <Button />
    </>
  );
}

export default App;
