import Hero from '@/components/widjets/Hero'
import React from 'react'
import Airpage from './features/page'
import Feature from '@/components/widjets/Feature'
import GearUp from '@/components/widjets/Gear'
import MissSection from '@/components/widjets/Miss'
import Essan from '@/components/widjets/Essan'
import Icon from '@/components/widjets/Icon'

function page() {
  return (
    <div>
<Hero/>
<Airpage/>
<Feature/>
<GearUp/>
<MissSection/>
<Essan/>
<Icon/>



    </div>
  )
}

export default page