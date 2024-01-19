
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className='flex max-w-[1200px] '>

      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">

        <div className="w-[30%] gap-20 object-cover" >
          <img src={item.image}  alt/>
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
         <div>
          <h1 className="text-xl text-slate-700 font-semibold p-5">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium p-5" >{item.description}</h1>
          <div className="flex items-center justify-between ">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
            
          </div>
          

         </div>
         
        </div>
       
       </div>

    </div>
    
  );
};

export default CartItem;