import { ChakraProvider } from '@chakra-ui/react';
import counter from './component/counter';

const Counter = counter

function App() {
  return (
    <ChakraProvider>
      <div>
        <Counter/>
      </div>
    </ChakraProvider>
  );
}

export default App;

