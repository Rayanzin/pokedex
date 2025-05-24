const Card = ({img, num, name}) => {
    return (
        <>
            <div className="w-[300px]  border-2 border-red-500 flex flex-col rounded-xl shadow-2xl bg-[#333]">
                <div className="w-full h-[50%]">
                    <img className="w-full h-full object-contain" src={img} alt="pokemon" />
                </div>
                <div className="w-[50px] mx-auto bg-red-500 rounded-sm text-white text-[20px] text-center">
                    #{num}
                </div>
                <p className="text-2xl text-center py-6 text-white">{name}</p>
                <button className="bg-white w-[100px] m-auto p-[10px] rounded-lg font-semibold hover:bg-[#999] duration-300 cursor-pointer active:bg-[#f00] active:text-white" >Detalhes</button>
            </div>
        </>
      );
}
 
export default Card;