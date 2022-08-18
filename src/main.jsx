import React,{Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(3786092), content:'Imagen 1', description:'Coche negro' },
  // Back
 // { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
  //{ position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
  { position: [-1.65, 0, 0.25], rotation: [0, Math.PI / 2.7, 0], url: pexel(2365701), content:'Imagen 2', description:'Tren' },
 // { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185) },
  { position: [-1.9, 0, 2.75], rotation: [0, Math.PI / 2.8, 0], url: pexel(1887792), content:'Imagen 3', description:'Sombrilla y lluvia' },
  // Right
  { position: [1.65, 0, 0.25], rotation: [0, -Math.PI / 2.7, 0], url: pexel(240526), content:'Imagen 4', description:'playa' },
 // { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
  { position: [1.9, 0, 2.75], rotation: [0, -Math.PI / 2.8, 0], url: pexel(1738986), content:'Imagen 5', description:'vacio' }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App images={images} />
  </Suspense>
)
