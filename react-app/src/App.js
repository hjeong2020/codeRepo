import {SnackbarProvider} from 'notistack';
import MyButton from './components/MyButton';

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <MyButton />
      </SnackbarProvider>

    </div>
  )  
}

export default App;
