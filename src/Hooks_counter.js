import { useState } from "react";

function Hooks_counter(){
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);
    const [name,setName] = useState("shyam kumar");

    return(
        <div className='border p-5 m-5 w-50 border-primary bg-primary-subtle bg-opacity-50'>
        <h2>Hooks Program</h2>
        <button className="btn btn-dark mt-5 m-2" onClick={()=>setCount1(count1+1)}>Increment </button>
        <button className="btn btn-dark mt-5 m-2" onClick={()=>setCount2(count2-1)}>Increment</button>
        <button className="btn btn-dark mt-5 m-2" onClick={()=>setName("Suresh Kumar")}>Change Name</button>
        <button className="btn btn-dark mt-5 m-2" onClick={()=>setName("Kamal Sharma")}>Change Name 2</button>

        <div>
            Increment button is clicked {count1} times.
        </div>
        <div>
            Decrement button is clicked {count2} times.
        </div>
        <div>
            My name is {name}
        </div>
        </div>
    )
}
export default Hooks_counter;