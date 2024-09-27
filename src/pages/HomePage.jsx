import React from 'react'
import Hero from '../component/Hero'
import HomeCards from '../component/HomeCards'
import JobListing from '../component/JobListing'
import ViewAllJobs from '../component/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListing isHome = {true}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage
