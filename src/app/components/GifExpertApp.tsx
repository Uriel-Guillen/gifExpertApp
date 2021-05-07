import React, {useState} from "react";
import {AddCategory} from "./addCategory/AddCategory";
import {GifGrid} from "./gifGrid/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategory] = useState(['Naruto']);

    return (
        <>
            <h2 className="animate__animated animate__pulse">Gif expert app</h2>

            <AddCategory setCategory={setCategory} />
            <hr/>

            <ol>
                {
                    categories.map(category => <GifGrid key={category} category={category} />)
                }
            </ol>
        </>
    );
}
