import { useDispatch, useSelector } from "react-redux"
import { increase } from "../store/reducers/countReducer";

export default function Count() {
    const data:any = useSelector(state=>state)
    console.log(data);
    const disPatch=useDispatch();
    const increaseCount = ()=>{
        disPatch(increase())
                
    }
  return (
    <div>Count
        <p>gia tri bien cao : {data.countReducer.count}</p>
        <button onClick={increaseCount}>tang</button>
        <button>giam</button>
    </div>
  )
}
