import { CustomFilters, Hero, SearchBar } from '@/components'
import Image from 'next/image'


export default function Home() {
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
      </div>
    </main>
  )
}
