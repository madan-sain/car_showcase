import { Carcard, CustomFilters, Hero, SearchBar } from '@/components'
import { HomeProps } from '@/types';
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home({ searchParams }:HomeProps) {
  const allCars = await fetchCars()
  const isDataEmpty =  !Array.isArray(allCars) || allCars.length < 1 || !allCars;
    return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="disciver">
        <div className='.home__filters'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue </h1>
          <p className='mt-2'>Explore the cars you might like.</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className="home__filter-container">
            {/* <CustomFilters title="fule" />
            <CustomFilters title="years" /> */}
          </div>          
        </div>
{!isDataEmpty ? (
  <section>
<div className='home__cars-wrapper'>
  {allCars?.map((car)=>(
<Carcard car={car}/>
  ))}
</div>
</section>
):(
  <div className='home__error-container'>
    <h2 className='text-black text-xl font-bold'>oops, no result found </h2>
    <p>{allCars?.message}</p>
  </div>
)}
      </div>
    </main>
  )
}
