import { Navbar } from '../components/Navbar.js'
import React,{ useState} from 'react'
import styles from '../styles/Home.module.css'
import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();

export default function Service({data}) {
  const [formData,setFormData] = useState ({})
  const [movies,setMovies] = useState(data)
async function saveMovie(e) {
  e.preventDefault();
  setMovies([...movies,formData])

const response = await fetch('/api/movies',{
  method: 'POST',
  body: JSON.stringify(formData)
}
)
}
    return (
        <div>
            <Navbar/>
            
            <div>
                <div className={styles.container}>
            <form onSubmit={saveMovie} className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-7 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        First Name
      </label>
      <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="grid-first-name" type="text" placeholder="FirstName" onChange={e => setFormData({...formData,firstname: e.target.value})}/>
      
    </div>
    <div className="w-full md:w-1/2 px-7">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Last Name
      </label>
      <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="grid-last-name" type="text" placeholder="LastName"  onChange={e => setFormData({...formData,lastname: e.target.value})}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-7 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Phone Number
      </label>
      <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="grid-password" type="number" placeholder="Phone Number" onChange={e => setFormData({...formData,phone: e.target.value})}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-7">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Suburb
      </label>
      <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="grid-city" type="text" placeholder="Suburb" onChange={e => setFormData({...formData,suburb: e.target.value})}/>
    </div>
    <div className="w-full px-7 py-5">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Enquiry
      </label>
      <div className="relative">
        <select className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="grid-state"  onChange={e => setFormData({...formData,enquiry: e.target.value})}>
          <option>Laptop Computer Service</option>
          <option>Desktop Computer Service</option>
          <option>Internet Problems</option>
          <option>Email Problems</option>
          <option>Printer Problems</option>
          <option>Network Setup</option>
          <option>Data Recovery</option>
          <option>Network Setup</option>

        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    
    <div className="w-full px-7 py-1">
      <label className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        More Details
      </label>
      
      <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="grid-zip" type="text" placeholder="More Details"  onChange={e => setFormData({...formData,details: e.target.value})}/>
    
    </div>
    
  </div>
  <button type="submit" className="px-4 py-2 placeholder-yellow-200 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-green-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700 ">Submit Request</button>
  <div>
  </div>
</form>
            </div>
        </div>
        </div>
    )
}




export async function getServerSideProps() {
  const movies = await prisma.user.findMany();
  return {
    props: {
      data:movies
    }}}

    