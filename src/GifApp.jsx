import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


// rafc p/ autocompletar
export const GifApp = () => {
    // useStateSnippet
    const [categories, setCategories] = useState(['gatos']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    

    return (
        <>
            <h1>Gifs</h1>                                                   {/* título */}

            <AddCategory                                                    /* input */
                // setCategories={setCategories} 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category} />
                    ))
            }
        </>
    );
};