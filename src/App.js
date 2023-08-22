import React from 'react';
import './styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
const App = () => {
  const interestsFormLink = 'https://forms.gle/aD8xG469uuHfVpoFA';
  const antiRaggingFormLink = 'https://forms.gle/eAnYN4HkpgwA3sNt8';

  const initialScheduleData = [
    ['9:30AM-9:40AM', 'Welcome Speech', 'Ritul Mishra'],
    ['9:40AM-9:50AM', 'Singing', 'Nehal and Team'],
    ['9:50AM-9:55AM', 'Singing', 'Kartheek, Rakesh'],
    ['9:55AM-10:07AM', 'Dance', 'Ramya and Team'],
    ['10:07AM-10:15AM', 'Singing', 'Sourojit Benerjee'],
    ['10:15AM-10:30AM', 'Dance', 'Tagore and Team'],
    ['10:30AM-10:45AM', 'Break', '-------------'],
    ['10:45AM-11:45AM', 'Dance/Music', 'Freshers Performances'],
    ['11:45AM-1:00PM', 'Games', 'Freshers'],
    ['1:00PM-2:00PM', 'Lunch', '-------------'],
    ['2:00PM-3:00PM', 'Mr & Mrs Fresher', 'Freshers'],
    ['3:00PM-3:05PM', 'Ending Speech', 'Ramya']
  ];

  const contactInfo = {
    name: 'Harsha Vikhyath',
    role: <a href="http://iiitt.ac.in/studentcouncil">President, Student Council</a>,
    email: '201114@iiitt.ac.in',
    phone: '8688258704',
    councilLink: 'http://iiitt.ac.in/studentcouncil'
  };
  const [scheduleData, setScheduleData] = useState([]);

  const [intervalId, setIntervalId] = useState(null); 

useEffect(() => {
  const loadDataWithInterval = () => {
    const interval = 300;
    let index = 0;

    const id = setInterval(() => {
      if (index < initialScheduleData.length) {
        setScheduleData([...initialScheduleData.slice(0, index + 1)]); 

        index++;
      } else {
        clearInterval(id);
      }
    }, interval);

    setIntervalId(id);
  };

  loadDataWithInterval();

  return () => {
    clearInterval(intervalId);
  };
  // eslint-disable-next-line 
}, []);


  return (
    <div className="App">
      <header>
        <img className='imagee' src="http://iiitt.ac.in/images/logo-iiit.png" alt="Header" />
      </header>

      <h1>Welcome Freshers!</h1>

      <div className="forms">
        <p>Please complete the following form if you're interested in participating in the Fresher's Day(21/08/2023).</p>
        <div>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: '#37353a',fontSize: '16px', padding: '10px 20px' }}>
            <a href={interestsFormLink} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
              Register here to participate
            </a>
          </button>
        </div>
      </div>

      <div className="schedule-heading">
        <h2>Schedule</h2>
      </div>

      <div className="container py-5">
        <div className="main-timeline-4 text-white">
          {scheduleData.map((item, index) => (
            item && (
              <div
                key={index}
                className={`timeline-4 ${index % 2 === 0 ? 'left-4' : 'right-4'}`}>
                <div className="card" style={{ background: index % 2 === 0 ? '#1351b3' : '#94cdf5' }}>
                  <div className="card-body p-4" style={{ color: index % 2 === 0 ? 'white' : 'black' }}>
                    <h4>{item[0]}</h4>
                    <p className="small text mb-4" style={{ color: '#37353a' }}>{item[1]}</p>
                    <p>{item[2]}</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      <div className="contact-info">
        For queries, contact:
        <p>
          {contactInfo.name}, {contactInfo.role}
          <br />
          Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <br />
          Phone: {contactInfo.phone}
        </p>
      </div>
      <div>
        <p>If you have experienced any violation, please provide the details below to report the incident.</p>
      <div>
          <a href={antiRaggingFormLink} target="_blank" rel="noopener noreferrer">
            Violation Form
          </a>
        </div>
      </div>
    </div>
  );
};


export default App;
