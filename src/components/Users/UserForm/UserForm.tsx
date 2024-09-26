import { useEffect, useState } from 'react';

import professions from 'data/professions.json';
import { getEuropeanCountries } from 'API/countryApi';

const UserForm: React.FC<any> = ({ initialValues, newUser }): React.ReactElement => {
  const [countries, setCountries]: any = useState([]);
  const [name, setName] = useState('');
  const [profession, setProffesion] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const { name, profession, country, status } = initialValues;
    setName(name);
    setProffesion(profession);
    setCountry(country);
    setStatus(status);
  }, [initialValues]);

  useEffect(() => {
    getEuropeanCountries().then(data => setCountries(data));
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'profession':
        setProffesion(value);
        break;

      case 'country':
        setCountry(value);
        break;

      case 'status':
        setStatus(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const updateUser = {
      name,
      profession,
      country,
      status,
    };

    newUser(updateUser);
  };

  return (
    <form id="userForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input type="text " name="name" placeholder="Enter full name" onChange={handleChange} value={name} />

      <label htmlFor="profession">Professions</label>
      <select required name="profession" onChange={handleChange} value={profession}>
        <option value="Select profession" disabled hidden>
          Select profession
        </option>
        {professions.map(({ title, id }) => {
          return (
            <option key={id} value={title}>
              {title}
            </option>
          );
        })}
      </select>
      <label htmlFor="country">Country</label>
      <select required name="country" onChange={handleChange} value={country}>
        <option value="Select country" disabled hidden>
          Select country
        </option>
        {countries.map(({ name }: any) => {
          return (
            <option key={name.common} value={name.common}>
              {name.common}
            </option>
          );
        })}
      </select>
      <select required name="status" onChange={handleChange} value={status}>
        <option value="Select status" disabled hidden>
          Select status
        </option>
        {['active', 'disabled', 'blocked'].map((status: any) => {
          return (
            <option key={status} value={status}>
              {status}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default UserForm;
