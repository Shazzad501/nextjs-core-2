"use client"
import { useEffect, useState } from "react";
import style from './post.module.css'
import Image from "next/image";

const MealsPage = () => {
  const [meal, setMeal] = useState([]);
  const [search, setSearch] = useState('');

  const getMeals = async()=>{
    try{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await res.json();
      return setMeal(data?.meals || [])
    }
    catch(error){
      console.log(error);
      return [];
    }
  }

  useEffect(()=>{
    getMeals();
  }, [search])
  return (
    <div>
      <h2 className="font-bold text-2xl text-center mb-5">Search Meal by name!</h2>
      <div className="flex flex-col items-center justify-center mb-6">
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Search meal" className="p-2 rounded-md text-black"/>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {
          meal?.map(singleMeal=>{
            return(
              <div key={singleMeal.idMeal} className="border border-white p-5 rounded-lg">
                <Image src={singleMeal?.strMealThumb} width={641} height={641} alt={singleMeal?.strMeal} />
                <p className="text-lg font-bold test-row-css">{singleMeal?.strMeal}</p>
                <p className={`text-base font-bold ${style['infile-css']}`}>{singleMeal?.strInstructions}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default MealsPage;