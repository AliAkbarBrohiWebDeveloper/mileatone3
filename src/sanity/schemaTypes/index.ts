import { type SchemaTypeDefinition } from 'sanity'
import navbar from './HeaderTop'
import HeroSection from './Hero'
import airmax from './feature'
import feature1Section from './feature1'
import GearUp from './Gear'
import missSection from './miss'
import EssanSection from './Essan'
import Products from './products'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navbar,HeroSection,airmax,feature1Section,GearUp,missSection,EssanSection,Products]
}
