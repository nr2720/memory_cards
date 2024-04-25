import { useState, useEffect, useRef } from 'react';
import { randomArray, checkIfMoreThanOne } from './functions';

export function Header({className, title, desc}) {
    return(
        <div className={className}>
            <h1>{title}</h1>
            <h3>{desc}</h3>
        </div>
    )
}

function Card({name, url, onClick}) {
    return (
        <div name = {name} className="box" onClick={onClick}>
            <img name = {name} className='pokeImg' src={url} alt={name + ' card'} />
            <h3 name = {name} >{name}</h3>
        </div>
    )
}

function Points({counter, maxCounter}) {
  return (
    <>
    <div className="points">
      <h2>Counter : {counter}</h2>
      <h2>Max counter : {maxCounter}</h2>
    </div>
    </>
  )
}

export function CardGame() {
  let initialList = [
    {name : 'bulbasaur', url : '', counter: 0, location : undefined},
    {name : 'ivysaur', url : '', counter: 0, location : undefined},
    {name : 'venusaur', url : '', counter: 0, location : undefined},
    {name : 'charmander', url : '', counter: 0, location : undefined},
    {name : 'charmeleon', url : '', counter: 0, location : undefined},
    {name : 'charizard', url : '', counter: 0, location : undefined},
    {name : 'squirtle', url : '', counter: 0, location : undefined},
    {name : 'wartortle', url : '', counter: 0, location : undefined},
    {name : 'blastoise', url : '', counter: 0, location : undefined},
    {name : 'metapod', url : '', counter: 0, location : undefined}
  ]
  const [pokemonList, setPokemonList] = useState(initialList)
  const [isClick, setIsClick] = useState(false);
  const [counter, setCounter] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const increment = () => setCounter(prevCount => prevCount + 1);

  const handleClick = (e) => {
    const copyArr = pokemonList;
    copyArr.map((element) => {
      if (e.target.name === element.name) {
        element.counter++;
      }
    })

    let newArr = [...pokemonList];
    let isMoreThanOne = checkIfMoreThanOne(newArr);
    if(isMoreThanOne) {
      setCounter(0);
      newArr.map((pokemon) => {
        pokemon.counter = 0;
      })
    }
    else {
      increment();
    }
    setPokemonList(copyArr);
    setIsClick(!isClick)
  }

  useEffect(() => {
    //change location
    const randomized = randomArray(pokemonList);
    let copyObj = [...pokemonList];
    let newArr = [...pokemonList];
    for(let i = 0; i< newArr.length; i++) {
      newArr[i] = copyObj[randomized[i]];
    }
    //check if more than two on the counter
    setPokemonList(newArr);
  }, [isClick]);

  
  useEffect(() => {
    const updatedPokemonArray = pokemonList.map(pokemon => ({
      ...pokemon,
      url: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`
    }));
    setPokemonList(updatedPokemonArray);

  }, [])

  useEffect(() => {
    if (counter > maxCount) {
      setMaxCount(counter);
    }
  }, [isClick])



    return (
      <>
      < Points counter={counter} maxCounter={maxCount} />
        <div className="cardsContainer">
            {pokemonList.map((pokemon) => (
                <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} onClick={handleClick}/>
            ))}
        </div>
      </>
        )
}