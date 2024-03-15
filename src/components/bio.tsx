const today = new Date();

function formatDate(date: number | Date | undefined){
    return new Intl.DateTimeFormat('en-us',{weekday: 'long'}
    ).format(date);
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
export default function ToDoList() {
    return (
<>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Putri" 
    className="photo"
   />
  <ul style={{ color: 'black' }}>
    <li>Mengerjakan PR</li>
    <li>Pergi Belanja</li>
    <li>Minum vitamin</li>
  </ul>
  <p className="summary" style={{ color: 'black' }}>
    Belajar Belanja Barang
  </p>
  <p className="summary" style={{ color: 'black' }}>
    HMM SEKARANG HARI APA YA
  </p>
  <h1 style={{ color: 'black' }}>{formatDate(today)}</h1>

  <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
</>

    );
}