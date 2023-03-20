export default function Card({onClose,name, status, species, gender, origin, image}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>name: {name}</h2>
         <h2>stauts: {status}</h2>
         <h2>species: {species}</h2>
         <h2>gender: {gender}</h2>
         <h2>origin: {origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
