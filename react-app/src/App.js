import {SnackbarProvider} from 'notistack';
import MyButton from './components/MyButton';
import Main from './components/Main'

const App = () => {
  return (
    <div>
      <Main posts="POST TEST" title="title test" />

      <SnackbarProvider>
        <MyButton />
        
      </SnackbarProvider>

    </div>
  )  
}

export default App;
