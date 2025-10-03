'use client';

import { FC, useState } from 'react';
import { ComponentProps } from '@uniformdev/csk-components/types/cskTypes';
import { withFlattenParameters } from '@uniformdev/csk-components/utils/withFlattenParameters';

// Can be moved to canvas side
const degrees = [
  'MBA',
  'MBA in Business Analytics',
  'MBA in Cybersecurity Management',
  'MBA in Digital Marketing',
  'MBA in Esports Management',
  'MBA in Healthcare Management',
  'MS in Cybersecurity',
  'MS in Literacy Education - Early Literacy concentration',
  'MS in Literacy Education - Individualized Design concentration',
  'MS in Literacy Education - Reading concentration (licensure track)',
  'MS in Literacy Education - Reading concentration (non-licensure track)',
  'MS in Literacy Education - Writing concentration',
  'MS in Organizational Leadership',
  'Master of Public Health',
  'Master of Science in Education - Educational Administration',
  'Professional Studies Certificate in Gifted Education',
];
const countries = ['United States of America', 'Canada', 'United Kingdom', 'Australia', 'Germany'];
const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const countryCodeOptions = [
  { code: '+1', flag: '🇺🇸', country: 'US' },
  { code: '+44', flag: '🇬🇧', country: 'GB' },
  { code: '+61', flag: '🇦🇺', country: 'AU' },
];

export type RequestInformationParameters = {
  displayName?: string;
};

export type RequestInformationProps = ComponentProps<RequestInformationParameters> & RequestInformationParameters;

const RequestInformation: FC<RequestInformationProps> = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
  const selectedFlag = countryCodeOptions.find(opt => opt.code === selectedCountryCode)?.flag;
  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <div className="flex items-start">
          <p className="text-white text-base">* Required Field</p>
        </div>

        <form className="mt-2">
          {/* Degree Selection */}
          <div className=" w-full flex items-start flex-col">
            <label htmlFor="degree" className="text-white text-sm font-semibold mb-2">
              Select a Degree*
            </label>
            <div className="w-full relative">
              <select
                id="degree"
                defaultValue="MBA"
                className="w-full h-11 bg-white rounded-sm px-3 pr-10 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                {degrees.map(degree => (
                  <option key={degree} value={degree}>
                    {degree}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="w-full flex items-start flex-col">
              <label htmlFor="firstName" className="text-white text-sm font-semibold mb-2 block">
                First Name*
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="bg-white w-full border-0 h-11 pl-2 placeholder:text-gray-400"
              />
            </div>
            <div className="w-full flex items-start flex-col">
              <label htmlFor="lastName" className="text-white text-sm font-semibold mb-2 block">
                Last Name*
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="bg-white w-full border-0 h-11 pl-2 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="w-full flex items-start flex-col mt-4">
            <label htmlFor="email" className="text-white text-sm font-semibold mb-2 block">
              Email*
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@example.com"
              className="w-full bg-white border-0 pl-2 h-11 placeholder:text-gray-400"
            />
          </div>

          {/* Phone */}
          <div className="w-full flex items-start flex-col mt-4">
            <label htmlFor="phone" className="text-white text-sm font-semibold mb-2 block">
              Phone*
            </label>
            <div className="flex w-full bg-white rounded-md overflow-hidden h-11">
              <div className="relative w-28 flex items-center border-r border-gray-200">
                <div className="absolute left-3 pointer-events-none text-2xl">{selectedFlag}</div>
                <select
                  value={selectedCountryCode}
                  onChange={e => setSelectedCountryCode(e.target.value)}
                  className="w-full h-full bg-transparent pl-12 pr-8 text-sm appearance-none cursor-pointer focus:outline-none"
                >
                  {countryCodeOptions.map(option => (
                    <option key={option.code} value={option.code}>
                      {option.code}
                    </option>
                  ))}
                </select>
                <div className="absolute right-2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <input
                id="phone"
                type="tel"
                placeholder="Phone number"
                className="flex-1 bg-white pl-2 border-0 h-full rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="w-full flex items-start flex-col">
              <label htmlFor="country" className="text-white text-sm font-semibold mb-2 block">
                Select a Country*
              </label>
              <div className="w-full relative">
                <select
                  id="country"
                  defaultValue="United States of America"
                  className="w-full h-11 bg-white rounded-md px-3 pr-10 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full flex items-start flex-col">
              <label htmlFor="state" className="text-white text-sm font-semibold mb-2 block">
                Select a State*
              </label>
              <div className="w-full relative">
                <select
                  id="state"
                  defaultValue=""
                  className="w-full h-11 bg-white rounded-md px-3 pr-10 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-400"
                >
                  <option value="" disabled>
                    Please select your State
                  </option>
                  {states.map(state => (
                    <option key={state} value={state} className="text-black">
                      {state}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withFlattenParameters(RequestInformation);
