import './App.css'

function App() {

  return (
    <>
     <button className='roheline-nupp'>Tekst, mis on helehall</button>
     <p className='sinine-tekst'>Sinine kaldkirjas tekst</p>
     <p className='roheline-tekst'>Tugev roheline piirjoonega tekst</p>
     <img className='pilt' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Maine_Coon_look.jpg/640px-Maine_Coon_look.jpg" alt="" />
      
     <br /><br />
     <h2>HTML Table</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </tbody>
      </table>

      <br /><br />

      <h2>YouTube video Reactis</h2>
      <iframe
        width="420"
        height="345"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        title="YouTube video player"
      ></iframe>
    </>
  )
}

export default App
