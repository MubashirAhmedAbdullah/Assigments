



function CategoryChip( { category } ){

    console.log('category==>', category.slug);
    const listItems = category.slug
    return (
        
        <option value="CAtegory" className="h-12 w-32 border-2  text-lg rounded-lg text-center p-2">{listItems}</option>
    )
}


export default CategoryChip;