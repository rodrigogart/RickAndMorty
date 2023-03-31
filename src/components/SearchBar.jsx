import {useState} from "react";

export default function SearchBar({onSearch}) {
   const [id,setID] = useState("");
   const handleChange = (event) => {
      setID(event.target.value);
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange} />
         <button onClick={()=>{onSearch(id)}}> Agregar </button>
      </div>
   );
}
