



function Dropdown(data, isChosen){
    console.log(data.data.name);
    console.log("Ischosen =====>",isChosen);
    const {name} = data.data;
    return(
        <div className="p-2 px-4 rounded-md border m-3 w-max text-nowrap cursor-pointer hover:bg-green-400 font-semibold">
            <h1>{name}</h1>
        </div>
    )
}


export default Dropdown;