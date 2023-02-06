import React from 'react';
import { tredingCoins, gaierCoins, recentlyCoins } from './../../dataDummy/index';
import { ListCoin } from '../moleculs';

const CryptoCurencySection = () => {

  return (
    <section className=' relative md:-mt-10' id='market'>
        <div className=' mx-auto rounded-xl lg:mx-8 py-8 px-4 shadow-lg'>
            <div className=' grid md:grid-cols-2 xl:grid-cols-3'>
                <div className='px-4 mb-6 lg:mb-0'>
                    <ListCoin title='🔥 Treding' data={tredingCoins} more='/'/>
                </div>
                <div className='px-4 mb-6 lg:mb-0'>
                    <ListCoin title='🚀 Top Gainers' data={gaierCoins} more='/'/>
                </div>
                <div className='px-4 mb-6 lg:mb-0'>
                    <ListCoin title='💎 Recently Added' data={recentlyCoins} more='/'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CryptoCurencySection