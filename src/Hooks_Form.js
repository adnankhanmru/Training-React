import { useEffect, useState } from "react"

export const Hooks_Form=(props)=>{
    
    const [id,setId]=useState('')
    const [name,setName]=useState('')

    useEffect(()=>{
        setId('10002')
        setName('Adnan')
        }
    )
    return(
        <>
        <div>
            <form className="w-50 bg-info text-primary">
                <div className="form-group">
                    <label>Enter ID</label>
                    <input className="form-control" value={id}></input>
                </div>
                <div className="form-group">
                    <label>Enter Name</label>
                    <input className="form-control" value={name}></input>
                </div>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>
                Address
            </h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Location</th>
                    <th>City</th>
                </tr>
            </table>
            {
                props.addr.map(a=>
                    <tr>
                        <td>{a.addr_id}</td>
                        <td>{a.location}</td>
                        <td>{a.city}</td>
                    </tr>
                )
            }
        </div>
        </>
    )

}