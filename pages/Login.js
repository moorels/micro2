import { Navbar } from '../components/Navbar'
import React,{Fragment,useState} from 'react'
import {PrismaClient} from '@prisma/client';

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
    const [number1,setNumber1] = useState('')
    return (
        <div>
            <Navbar/>
            {movies.map(item  => {
              if (item.phone === number) {
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
            <div>
  	<form className="m-4 flex">
    	<input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Phone Number"  onChange={(e)=> setNumber(e.target.value)}/>
		<button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r ">Ticket</button>
	</form>
    <div>

    </div>
</div>
        </div>
    )
}

export default Login
