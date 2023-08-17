import './App.css';
import CaseComponent from './Components/CaseComponent';
let content = [
  { boxTitle: '2022 - Sr Product Designer', selectedSubhead: 'Product Design, Interaction Design, Design Systems', img: "https://uploads-ssl.webflow.com/62adfa91c5d9c177d56ee711/63cb5be15ff1b7fddd5eb224_WITH%20-%20Wordmark%20-%20White%20-%20Transparent.png", box_title: 'With', boxSubhead: 'A groupchat app meant to bring far apart friends closer together' },

  { boxTitle: '2022 - Brand Owner', selectedSubhead: 'UX/UI Design, Art Direction, Product Design', img: "https://uploads-ssl.webflow.com/62adfa91c5d9c177d56ee711/62c21d66ff36a9714a19a006_Hitched%20Rings.svg", box_title: 'Hitched', boxSubhead: 'Joint banking for couples combining their finances for the first time' },

  { boxTitle: '2021 - Brand Owner', selectedSubhead: 'UI/UX Design, Art Direction, Product Design', img: "https://uploads-ssl.webflow.com/62adfa91c5d9c177d56ee711/62c21e1767a6a3c31d060ae1_LocalityLog.svg", box_title: 'Locality', boxSubhead: 'Bank serving small business owners of South Florida' },

  { boxTitle: '2020 - Brand Design Lead', selectedSubhead: 'Brand Design and Art Direction', img: "https://uploads-ssl.webflow.com/62adfa91c5d9c177d56ee711/62ae05a50eca2558ca389a72_Create%20Remote%20blue.svg", box_title: 'Create Remote', boxSubhead: 'A groupchat app meant to bring far apart friends closer together' },
]

function App() {
  return (
    <div className="App">
      <img className='Butterfly' src='https://uploads-ssl.webflow.com/62acc17f0bea707cb5017f40/62ace92c4159c5527c1f3f56_Moth.svg' alt='' />
      <h1 className='heading'>Case Studies</h1>
      <div className='collection-items'>
        <CaseComponent boxTitle={content[0].boxTitle} selectedSubhead={content[0].selectedSubhead} image={content[0].img} box_title={content[0].box_title} boxSubhead={content[0].boxSubhead} />
        <CaseComponent boxTitle={content[1].boxTitle} selectedSubhead={content[1].selectedSubhead} image={content[1].img} box_title={content[1].box_title} boxSubhead={content[1].boxSubhead} />
        <CaseComponent boxTitle={content[2].boxTitle} selectedSubhead={content[2].selectedSubhead} image={content[2].img} box_title={content[2].box_title} boxSubhead={content[2].boxSubhead} />
        <CaseComponent boxTitle={content[3].boxTitle} selectedSubhead={content[3].selectedSubhead} image={content[3].img} box_title={content[3].box_title} boxSubhead={content[3].boxSubhead} />
      </div>
    </div>
  );
}

export default App;
