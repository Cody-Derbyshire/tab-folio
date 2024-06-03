import '../styling/Me.css';

const Me = ({ bgCol, col }) => {
  return (
    <>
      <div className='me-wrapper' style={{ background: bgCol, color: col }}>
        <h1>Me</h1>
      </div>
    </>
  );
};

export default Me;
