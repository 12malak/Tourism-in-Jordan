import React from 'react';

function Tours() {
  const tours = [
    { id: 1, name: 'Amman', info: 'The city of Amman is the capital of the Hashemite Kingdom of Jordan, the Capital Governorate. It is the largest city in the Kingdom and one of the fastest growing cities in the world.', image: 'https://th.bing.com/th/id/OIP.HVxwLJzCEvTYrkUh0TmhvQHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
    { id: 2, name: 'Aqaba', info: 'Aqaba is the only coastal city in Jordan, and the largest and most populated city among all the Gulf of Aqaba cities. Aqaba is located in the far south of the Hashemite Kingdom of Jordan on the Red Sea coast', image: 'https://th.bing.com/th/id/OIP.YHDpI2QWolY5mSAPuvamvAHaE8?w=219&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
    { id: 3, name: 'Petra', info: 'The city of Petra, capital of the Nabataean Arabs, is one of the most famous archaeological sites in the world. It is located 240 km south of the capital Amman and 120 km north of the red sea town of Aqaba ', image: 'https://th.bing.com/th/id/OIP.Hys2Wlk0t5R1qCKcAqNyFQHaFS?w=284&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
    { id: 4, name: 'Dead-Sea', info: 'The Dead Sea is a closed salt lake located in the Jordan Valley groove within the Syrian-African fissure, on the border line separating Jordan and historical Palestine.', image: 'https://th.bing.com/th/id/OIP.Wb4xuT_eAB7uuPHCm9XHqQHaE8?w=294&h=196&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
  ];

  return (
    <div>
      {tours.map((tour) => (
         <div className="card" key={tour.id}>
         <img src={tour.image} alt={tour.name}  style={{ width: "100%" }} />
         <div className="container">
           <h4>
             <b>{tour.name}</b>
           </h4>
           <p>{tour.info}</p>
         </div>
       </div>
      ))}
    </div>

    
  );
  
}


export default Tours;