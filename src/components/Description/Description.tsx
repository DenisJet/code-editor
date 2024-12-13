import './Description.css';

function Description({ description }: { description: { title: string; text: string } }) {
  return (
    <div className='description'>
      <h2 className='title'>Description</h2>
      <div>
        <h3 className='description__title'>{description.title}</h3>
        <p className='description__text'>{description.text}</p>
      </div>
    </div>
  );
}

export default Description;
