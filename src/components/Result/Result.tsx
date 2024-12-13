import './Result.css';

function Result({ output, isLoading }: { output: string; isLoading: boolean }) {
  return (
    <div className='result'>
      <h2 className='title'>Result</h2>
      {isLoading ? <p>Loading...</p> : <pre>{output}</pre>}
    </div>
  );
}

export default Result;
