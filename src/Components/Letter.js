import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './Letter.css' 


function Letter() {

  const componentRef = useRef();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://palika-production.up.railway.app/getsifaris');
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }
        const data = await response.json();
        setStudents(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching student data:', error);
        // Handle error (e.g., show error message)
      }
    };

    fetchStudents();
  }, []); // Empty dependency array ensures effect runs only once



  return (
    <div>
      <div>
    {students.map(student=>(
      <div>
    <div className='header'ref={componentRef}  >
        <div className='headerWrapper' >
            <div className='nisanachaap_chalani'>
              <div className='nisanachap'>
                <img className='nisanachap_image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png' alt='nisanaa'/>

              </div>
              
              <div className='patra_chalani'>
                <p>प.सं. ०८१/८२</p>
                <p>च.नं.</p>
              
              </div>
            </div>
            <div className='municipality__address'>
              <div className='nagarpalika_name'><h3>फिदिम नगरपालिका</h3></div>
              <div className='nagarpalika_name'><h2>नगर कार्यपालिकाको कार्यालय</h2></div>
              <div className='nagarpalika_address'><p>फिदिम, पाँचथर</p></div>       
            </div>

            <div className='municipalitylogo__date'>
              <div className='municipalitylogo'>
              <img className='nisanachap_image' src='https://home.phidimmun.gov.np/assets/logo-052b4dde.png' alt='logo'/>
              </div>
              <div className='municipalitylogokoshi'>कोशी प्रदेश,नेपाल</div>
              <div className='date'>मितिः{student.date} </div>
            </div>
         </div>
        {/* <h1>Body</h1> */}
        <div className='letter__body'>
          <div className='letter__subject'>
             <h5>विषय: सिफारिस सम्बन्धमा ।</h5>
          </div>
          <div className='letter__dpo' >
            <p>श्री जिल्ला प्रशासन कार्यालय</p>
            <p>पाँचथर।</p>
          </div>

          <div className='letter__paragraph'>
            <p>
            प्रस्तुत विषयमा तहाँ कार्यालयबाट  दर्ता नं.{student.dartanum} कायम भई आ.व.{student.dartafy} मा  दर्ता भएको <strong>“{student.name}”</strong>  फिदिम न.पा {student.ward}, पाँचथर नामक  संस्थालाई आ.व. २०८१।८२ सम्म नवीकरणका लागी  तहाँ कार्यालयमा सिफारिस गरिदिन भनी उक्त संस्थाको  च.नं.{student.sansthachalani}  को पत्रानुसार माग निवेदन पेश भएको हुँदा तहाँ कार्यालयमा नियमानुसार हुन सिफारिस गरिएको बेहोरा अनुरोध छ ।  
            </p>
          </div>
          <div className='letter__mayorsig'>
            <div className='mayor__sig'><p>.........................................</p></div>
            <div className='mayor__name'><p>(मित्र प्रसाद काफ्ले)</p></div>
            <div className='mayor__post'><p>नगर प्रमुख</p></div>
          </div>
        
    

        </div>



    </div>
    <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
    </div>
      ))}
    </div>
    </div>

  );
};

export default Letter
