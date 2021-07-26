import { Navbar } from '../components/Navbar'
import React,{Fragment,useState} from 'react'
import {PrismaClient} from '@prisma/client';
import styles from '../styles/Home.module.css'

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const users = await prisma.user.findMany();

    return {
      props: { data: users },
    };
  }

function Login({data}) {

    const [movies,setMovies] = useState(data)
    const [number,setNumber] = useState('')
    const [number1,setNumber1] = useState(number)
    return (
        <div>
            <Navbar/>
            
            <div className={styles.main}>
  	<form className="m-8 flex content-center">
    	<input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Phone Number"  onChange={(e)=> setNumber(e.target.value)}/>
		
	</form>
  
    <div  className="content-center">
    <button className="content-center px-14 py-2 placeholder-yellow-200 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-yellow-500 rounded-md dark:bg-gray-800 hover:bg-yellow-700 dark:hover:bg-gray-700 focus:outline-none focus:bg-yellow-500 dark:focus:bg-gray-700" onClick={(e)=> setNumber1(number)}>Ticket</button>
    </div>
    <div>
    {movies.map(item  => {
              if (item.phone === number1) {
     return (
      
      <Fragment key={Math.floor(Math.random()*10000)}>
     <li ><br/>
       <span ><strong>{item.firstname}</strong></span><br/>
       <span>{item.lastname}</span><br/>
       <span>{item.phone}</span><br/>
       <span>{item.suburb}</span><br/>
       <span>{item.enquirer}</span><br/>
        <span>{item.details}</span><br/>
      
       </li>
      </Fragment>
     
     )
    }
    }
     )}
    </div>
    
</div>

        </div>
    )
}

export default Login
