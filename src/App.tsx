import { useState } from 'react';
import './App.css';
import Code from './components/Code/Code';
import Description from './components/Description/Description';
import Result from './components/Result/Result';
import { languages } from './mock/languages.mock';
import { description } from './mock/description.mock';

function App() {
  const [language, setLanguage] = useState(languages[0].value);
  const [code, setCode] = useState<string | undefined>('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRunCode = async () => {
    if (!code?.trim()) return;
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch('https://d6c8d29a92c2d5be.mokky.dev/execute', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          // body: JSON.stringify({ language, code }),    // if this was a real POST request to a real server
        });

        if (response.status !== 200) {
          setOutput('SyntaxError: Unexpected token');
        } else {
          setOutput('Hello World');
        }
      } catch {
        setOutput('Error executing code');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className='main-container'>
      <div className='block-1'>
        <Description description={description} />
      </div>
      <div className='block-2'>
        <Code
          code={code}
          setCode={setCode}
          language={language}
          setLanguage={setLanguage}
          handleRunCode={handleRunCode}
          isLoading={isLoading}
        />
      </div>
      <div className='block-3'>
        <Result output={output} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
