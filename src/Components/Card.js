import React from 'react';

export const Card = ({ fullInformation }) => {
  return (
    <div
      className="w-full md:w-3/5 bg-purple-800 text-white p-4 rounded-md flex flex-col gap-2"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${fullInformation.url})`,
        backgroundSize: 'cover',
      }}
    >
      <p className="text-center font-bold">CARD FORMAT</p>

      <div className="flex justify-between">
        <p>CAT_ID:</p>
        <span className="underline">{fullInformation.id}</span>
      </div>

      <div className="flex justify-between">
        <p>NAME:</p>
        <span className="underline">{fullInformation.breeds[0].name}</span>
      </div>

      <div className="flex justify-between">
        <p>ORIGIN:</p>
        <span className="underline">{fullInformation.breeds[0].origin}</span>
      </div>

      <div className="flex justify-between">
        <p>COUNTRY_CODE:</p>
        <span className="underline">
          {fullInformation.breeds[0].country_codes}
        </span>
      </div>

      <p>DESCRIPTION: {fullInformation.breeds[0].description}</p>
    </div>
  );
};
