

import HeroSec from '@/component/herosec'
import React from 'react'
import Technalogy from './technology/page'

import ContactPage from '@/component/contact'
 export const metadata ={
  title:'Home_Page'
 }
const Home = () => {
  return (


    <div>

<HeroSec/>
<Technalogy/><ContactPage/>


    </div>
 
  )
}

export default Home