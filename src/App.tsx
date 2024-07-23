import Countries from "./components/Countries"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const queryCLient = new QueryClient();

  return (
    <QueryClientProvider client={queryCLient}>
      <div className="bg-darkbluezero text-lightgray">
        <Header />
        <SearchBar />
        <Countries />
      </div>
    </QueryClientProvider>
  )
}

export default App
