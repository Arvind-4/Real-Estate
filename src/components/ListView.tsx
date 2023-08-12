'use client';
import React, { useState } from 'react';

import Card from '@/components/Card';
import { houseArray, shuffledHouseArray } from '@/data/house';
import { HouseInterface } from '@/interface/house';

const ListView = () => {
  const options = ['Apartment', 'House', 'Villa'];
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [arr, setArr] = useState(shuffledHouseArray);

  const optionChangeHandler = (event: any) => {
    setType(String(event.target.value).toLowerCase());
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    const filteredHouse: HouseInterface[] = houseArray.filter(
      (house: HouseInterface) => {
        if (location)
          return (
            house.location.toLowerCase().includes(location) ||
            (house.rent >= min && house.rent <= max)
          );
        if (type)
          return (
            house.type.toLowerCase().includes(type) ||
            (house.rent >= min && house.rent <= max)
          );
        if (type && location)
          return (
            house.type.toLowerCase().includes(type) ||
            house.location.toLowerCase().includes(location) ||
            (house.rent >= min && house.rent <= max)
          );
        if (min && max) return house.rent >= min && house.rent <= max;
        if (type && location && min && max)
          return (
            house.type.toLowerCase().includes(type) ||
            house.location.toLowerCase().includes(location) ||
            (house.rent >= min && house.rent <= max)
          );
      }
    );
    setArr(filteredHouse);
  };

  const handleReset = (event: any) => {
    event.preventDefault();
    setLocation('');
    setType('');
    setMin(0);
    setMax(0);
    setArr(shuffledHouseArray);
  };

  return (
    <div>
      <div className="py-5">
        <h1 className="text-2xl font-bold text-center text-blue-600 lg:text-4xl">
          Search Property
        </h1>
        <div className="flex justify-center">
          <div className="w-40 h-1 bg-indigo-400 rounded"></div>
        </div>
      </div>

      <div className="m-4 lg:m-0">
        <div className="p-8 bg-white lg:flex lg:items-center lg:justify-center">
          <div className="space-y-4 lg:space-y-0 lg:flex lg:space-x-4 lg:flex-nowrap">
            <div className="">
              <select
                className="w-full py-2.5 px-8 bg-white border border-gray-400 rounded outline-none focus:ring-2"
                onChange={optionChangeHandler}
              >
                {options.map((option, index) => {
                  return (
                    <option
                      className="w-full py-2.5 px-8 bg-white border border-gray-400 rounded outline-none focus:ring-2"
                      key={index}
                    >
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
                placeholder="Enter your Location..."
                name="location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
                placeholder="Minimum Rent"
                name="min"
                onChange={(e) => setMin(Number(e.target.value))}
              />
            </div>
            <div>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
                placeholder="Maximum Rent"
                name="max"
                onChange={(e) => setMax(Number(e.target.value))}
              />
            </div>
            <div>
              <button
                className="px-8 py-2 text-blue-100 bg-gray-600 rounded"
                onClick={handleSearch}
              >
                Search
              </button>
              <button
                className="mx-2 px-2 py-2 text-blue-100 bg-gray-600 rounded"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="px-4 py-4 bg-gray-200 lg:px-32 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {arr.map((house: HouseInterface, index: number) => {
            return <Card key={index} house={house} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default ListView;
