
function Titletext({props}){
    return(
        <div><p className="text-center text-wrap font-bold pt-8 text-4xl underline italic text-white">{props}</p></div>
    )
}



function SubTitle({props}){
    return(
        <div><p className="text-center text-wrap font-bold pt-4 text-3xl underline text-white">{props}</p></div>
    )
}


function Text({content,}){
    return(
        <p className="text-xl text-center underline  text-wrap">{content}</p>
    )
}


export{
    SubTitle,
    Titletext,
    Text,
}