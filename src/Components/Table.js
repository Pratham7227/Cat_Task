import React from 'react';

export const Table = ({ fullInformation }) => {
  return (
    <div className="overflow-x-auto">
      <table
        border="1"
        className="w-full border-collapse border border-gray-400 text-sm text-center"
      >
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border border-gray-500 p-2">ID</th>
            <th className="border border-gray-500 p-2">BREED NAME</th>
            <th className="border border-gray-500 p-2">ORIGIN</th>
            <th className="border border-gray-500 p-2">COUNTRY CODE</th>
            <th className="border border-gray-500 p-2">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-white bg-gray-800">
            <td className="border border-gray-500 p-2">{fullInformation.id}</td>
            <td className="border border-gray-500 p-2">
              {fullInformation.breeds[0].name}
            </td>
            <td className="border border-gray-500 p-2">
              {fullInformation.breeds[0].origin}
            </td>
            <td className="border border-gray-500 p-2">
              {fullInformation.breeds[0].country_codes}
            </td>
            <td className="border border-gray-500 p-2">
              {fullInformation.breeds[0].description}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
