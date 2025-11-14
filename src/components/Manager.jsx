import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import save from '../assets/save.svg'
import hide from '../assets/hide.svg'
import unhide from '../assets/unhide.svg'
import copy from '../assets/copy.svg'
import edit from '../assets/edit.svg'
import del from '../assets/delete.svg'


const Manager = () => {
    const ref = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([])

    const getPasswords = async () => {
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json();
        setPasswordArray(passwords)
    }


    useEffect(() => {
        getPasswords();
    }, [])


    const Changevisibility = () => {
        const passwordInput = document.querySelector('input[placeholder="Password"]');
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            ref.current.src = unhide;
        } else {
            passwordInput.type = "password";
            ref.current.src = hide;
        }
    }
    const Handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const savePassword = async () => {
        if (form.site === "" || form.username === "" || form.password === "") {
            alert("Please fill all the fields");
            return;
        } else {
            //if form has id, it means we are editing an existing password
            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) });

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
            await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) });
            toast('Password Saved!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setForm({ site: "", username: "", password: "" });
        }
    }

    const deletePassword = async (id) => {
        let c = confirm("Are you sure you want to delete this password?");
        if (!c) return;
        setPasswordArray(passwordArray.filter(item => item.id !== id));
        let res = await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
        toast('Password Deleted!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }
    const editPassword = (id) => {
        setForm({ ...passwordArray.find(item => item.id === id), id: id });
        setPasswordArray(passwordArray.filter(item => item.id !== id));

    }


    const copyText = (text) => {
        return () => {
            navigator.clipboard.writeText(text);


            toast('Text Copied!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="container mx-auto my-4  font-sansoverflow-y-auto text-white max-w-2xl space-y-3">
                <div className='text-[17px] font-mono p-2 m-2'>
                    <span>All your passwords. One secure vault. Welcome to </span>
                    <span className='text-[#e99e14] font-bold'>ONE</span>
                    <span className='font-bold text-[#868585]'>PASS.</span>
                </div>

                <div className='flex flex-col text-white gap-2 justify-center'>
                    <input value={form.site} onChange={Handlechange} type="text" placeholder='Website URL' className='rounded-full py-2 px-4 m-2 border border-[#e99e14]' name='site' />
                    <div className='flex w-full justify-between '>
                        <input value={form.username} onChange={Handlechange} type="text" placeholder='Username' className='rounded-full py-2 px-4 m-2 border border-[#e99e14] w-full' name='username' />
                        <div className='relative flex w-full'>
                            <input value={form.password} onChange={Handlechange} type="password" placeholder='Password' className='rounded-full py-2 px-4 m-2 border border-[#e99e14] w-full' name='password' />
                            <span className='absolute right-5 top-4 hover:cursor-pointer hover:text-[#868585]' onClick={Changevisibility}><img ref={ref} src={hide} alt="" /></span>
                        </div>
                    </div>
                    <button className='flex justify-center items-center gap-1  bg-[#e99e14] text-black font-bold rounded-full py-2 px-4 m-2 w-1/3 mx-auto hover:bg-[#eeb71f]' onClick={savePassword}>
                        <img src={save} alt="Save" />Save
                    </button>
                </div>



                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <h2 className='text-[17px] font-mono p-2 m-2'>Add a new login to your vault.</h2>
                    {passwordArray.length === 0 && <p className='text-center text-[#868585]'>No passwords saved yet.</p>}
                    {passwordArray.length != 0 &&
                        <div className="w-full">
                            {/* horizontal & vertical scrolling container */}
                            <div className="overflow-x-auto">
                                <div className="max-h-44 overflow-y-auto rounded-lg">
                                    <table className="min-w-[640px] w-full text-sm text-left text-[#ffffff] border-collapse">
                                        <thead className="sticky top-0 z-10 text-xs uppercase bg-[#e99f14e5]">
                                            <tr>
                                                <th scope="col" className="px-4 py-3">Website URL</th>
                                                <th scope="col" className="px-4 py-3">Username</th>
                                                <th scope="col" className="px-4 py-3">Password</th>
                                                <th scope="col" className="px-4 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {passwordArray.map((item, index) => (
                                                <tr key={index} className="bg-transparent border-b border-[#e99e14] hover:bg-[#1a1a1a]">
                                                    <th scope="row" className="px-4 py-3 font-medium text-[#ffffff] whitespace-nowrap max-w-[220px] truncate">
                                                        <a href={item.site} target="_blank" rel="noreferrer" className="inline-block align-middle truncate">
                                                            {item.site}
                                                        </a>
                                                        <button onClick={copyText(item.site)} aria-label={`Copy site ${item.site}`} className="inline-block ml-2 align-middle cursor-pointer"                                                        >

                                                            <img src={copy} alt="Copy" className="h-4 w-4" />
                                                        </button>
                                                    </th>

                                                    <td className="px-4 py-3 max-w-40 truncate">
                                                        <span className="inline-block align-middle truncate">{item.username}</span>
                                                        <button onClick={copyText(item.username)} aria-label={`Copy username ${item.username}`} className="inline-block ml-2 align-middle cursor-pointer" >

                                                            <img src={copy} alt="Copy" className="h-4 w-4" />
                                                        </button>
                                                    </td>

                                                    <td className="px-4 py-3 max-w-40 truncate">
                                                        <span className="inline-block align-middle truncate">{"*".repeat(item.password.length)}</span>
                                                        <button onClick={copyText(item.password)} aria-label={`Copy password for ${item.site}`} className="inline-block ml-2 align-middle cursor-pointer" >

                                                            <img src={copy} alt="Copy" className="h-4 w-4" />
                                                        </button>
                                                    </td>

                                                    <td className="px-4 py-3 text-right space-x-2">
                                                        <button className="inline-block cursor-pointer" onClick={() => editPassword(item.id)} aria-label={`Edit ${item.site}`} >
                                                            <img src={edit} alt="Edit" className="h-5 w-5" />
                                                        </button>
                                                        <button className="inline-block cursor-pointer" onClick={() => deletePassword(item.id)} aria-label={`Delete ${item.site}`} >
                                                            <img src={del} alt="Delete" className="h-5 w-5" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </>
    )
}

export default Manager
