


function CategoryCard({ category, ischosen, onClick }) {

console.log('chosen ===>',ischosen);
    const { name } = category
    return (

        <div
            onClick={onClick}
            className={`${ischosen ? "bg-green-600" : "bg-white"}p-2 px-4 rounded-md border m-3 w-max text-nowrap cursor-pointer hover:bg-green-400 font-semibold`}>
            <h1>{name}</h1>
        </div>
    )
}


export default CategoryCard;