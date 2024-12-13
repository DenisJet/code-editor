import { languages } from '../../mock/languages.mock';
import './Code.css';
import MonacoEditor from '@monaco-editor/react';

type CodeType = {
  code?: string;
  setCode: (newCode?: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  handleRunCode: () => void;
  isLoading: boolean;
};

function Code({ code, setCode, language, setLanguage, handleRunCode, isLoading }: CodeType) {
  return (
    <div className='code'>
      <div className='code__header'>
        <h2 className='title'>Code</h2>
        <select className='code__select' value={language} onChange={(e) => setLanguage(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      <div className='code__container'>
        <MonacoEditor
          height='400px'
          language={language}
          value={code}
          onChange={(newCode) => setCode(newCode)}
          theme='vs-dark'
          options={{
            selectOnLineNumbers: true,
            minimap: { enabled: false },
          }}
        />
      </div>
      <button className='code__run' onClick={handleRunCode}>
        {isLoading ? 'Running...' : 'Run'}
      </button>
    </div>
  );
}

export default Code;
