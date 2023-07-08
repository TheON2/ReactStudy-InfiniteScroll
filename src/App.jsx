import Main from "./layout/Main/Main";
import {QueryClient, QueryClientProvider} from 'react-query'
import Header from "./layout/Header/Header";
import style from './App.css'
const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div id='container'>
        <Header/>
        <Main/>
      </div>
    </QueryClientProvider>
  )
}

export default App
