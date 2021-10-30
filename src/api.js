export default function Api() {
    const [pokemons, setPokemons] = useState(null);//esto seria para guardar en algun lado la informacion de los datos traidos.
    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon?Limit=10")//devuelve una respuesta, pide informacion al servidor---> devuelve una respuesta co info
        .then((response) => response.json())//devuelve otra promesa, ahora con esto podemos ver la data traida
        .then((data)=> {
            setPokemons(data.result);//manda la info al array de arriba.
        })
        .catch ((err) => {
            console.log(err);
        });
    },[]);

    console.log(pokemons);

    return (
        <div>
            {pokemons?.map((pokemon) => (
                <div key={pokemon.name}>{pokemon.name}</div>
            ))}
                <h1>{pokemons}</h1>
        </div>
            )
        ;
    }

    //esto lo ponia en App.js y es para llamar en todos lados o algo asi
            
    
    //copia de lo hecho en clase
 //   <BrowserRouter>
 //   <nav>soy el nabar</nav>
 //   <switch>
 //     <Route exact path="/pokemons">
 //       <Pokemons/>
 //     </Route path="/pokemons/*">
 //     <h1> WildCard</h1>
 //   </switch>
 // ) {
 //     case value:
 //       
 //       break;
 //   
 //     default:
 //       break;
 //   }
 //   </BrowserRouter>