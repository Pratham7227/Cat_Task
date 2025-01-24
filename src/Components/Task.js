import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { Table } from './Table';

export const Task = () => {
  const [data, setData] = useState([]);
  const [fullInformation, setFullInformation] = useState([]);
  const [randomNumber, setRadndomNumber] = useState(1);
  const [view, setView] = useState('card');

  const callApi = async () => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?has_breeds=${randomNumber}`
      );
      const result = await response.json();

      const response2 = await fetch(
        `https://api.thecatapi.com/v1/images/${result[0].id}`
      );
      const result2 = await response2.json();
         
      setData(result);
      setFullInformation(result2);
    } catch (e) {
      console.log('Something went wrong!');
    }
  };

  const getRandomNumber = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    setRadndomNumber(num);
  };

  useEffect(() => {
    callApi();
  }, [randomNumber]);

  return (
    <div className="bg-gray-900 p-3 min-h-screen">
      {/* Header Buttons */}
      <div className="flex justify-between flex-wrap">
        <button
          className="bg-yellow-300 font-medium p-2 rounded-md mr-1 hover:bg-yellow-500"
          onClick={getRandomNumber}
        >
          GET RANDOM CAT
        </button>
        <div className="mt-2 sm:mt-0">
          <button
            className={`${
              view === 'card' ? 'bg-gray-800' : 'bg-gray-600'
            } px-3 py-2 rounded-md mr-1 text-white`}
            onClick={() => setView('card')}
          >
            CARD
          </button>
          <button
            className={`${
              view === 'table' ? 'bg-gray-800' : 'bg-gray-600'
            } px-3 py-2 rounded-md text-white`}
            onClick={() => setView('table')}
          >
            TABLE
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="bg-gray-700 mt-6 rounded-md w-full flex flex-col justify-center items-center"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://static.vecteezy.com/system/resources/thumbnails/033/863/290/small_2x/two-white-cats-with-red-eyes-on-a-black-background-studio-shot-two-white-cats-on-a-black-background-with-a-place-for-your-text-ai-generated-free-photo.jpg)`,
        }}
      >
        {data.map((element, key) => (
          <div
            key={key}
            className="flex flex-col gap-7 p-3 w-full sm:max-w-4xl"
          >
            <p className="text-white text-2xl text-center">CAT'S INFORMATION</p>

            <div className="flex flex-col gap-4 md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-2/3">
                <img
                  src={element.url}
                  className="rounded-md w-full max-h-[300px] object-cover"
                  alt="Cat"
                />
              </div>

              {/* View Section */}
              <div className="w-full">
                {view === 'card' ? (
                  <Card fullInformation={fullInformation} />
                ) : (
                  <Table fullInformation={fullInformation} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
