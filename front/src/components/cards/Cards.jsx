import Card from '../card/Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   console.log(characters)
   // ! VAriable que hiso el profe

   return( 
      <div>
         {
         characters?.map((personaje)=>{
            return(
               // ! Mi codigo principal
               // <Card 
               //    name={personaje.name} 
               //    species={personaje.species} 
               //    gender={personaje.gender} 
               //    image={personaje.image} 
               // />
               // ! Correccion del profe
               <Card 
                  key={personaje.id}
                  id={personaje.id}
                  name={personaje.name} 
                  species={personaje.species} 
                  gender={personaje.gender} 
                  image={personaje.image} 
                  onClose={onClose}
               />
            )
         })
         }
      </div>
   )
}
