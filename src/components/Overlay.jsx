const Overlay = ({className="", prop}) => {
    return (
        <div className={`absolute top-0 left-0 w-full h-[18562px] z-10 bg-[#11111190] ${className} `} onClick={prop} ></div>
    );
}
 
export default Overlay;