import {useRef,useEffect, useState} from "react";
import './App.css';
import Input from "./components/input";

import {AiFillFacebook} from 'react-icons/ai'
function App() {
  const ref = useRef()
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const enable = username && password;
  useEffect(() => {
let images= ref.current.querySelectorAll('img'),
total = images.length,
current = 0
const imageSlider = () => {
  if(current > 0) {
    images[current - 1].classList.add('opacity-0')
  }
  else {
    images[total - 1].classList.add('opacity-0')
  }
  images[current].classList.remove('opacity-0')
if(current === total - 1) {
  current = 0
}
else {
  current += 1
}
}
imageSlider()
let interval = setInterval(imageSlider,3000)
return(() => {
  clearInterval(interval)
})


  },[ref])
  return (
    <div className="h-full w-full flex-col justify-center items-center ">
<div className='h-full w-full flex justify-center items-center space-x-8'>
<div className=" w-[380px] hidden md:block h-[581px] bg-phoneBackground bg-[top_left_-46px] ">
  <div className="w-[250px] h-[538px] absolute mt-7 ml-ml-26 " ref={ref}>
<img className=" absolute top-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"></img>
<img className="absolute top-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"></img>
<img className=" absolute top-0 opacity-0 transition-opacit duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"></img>
<img className=" absolute top-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"></img>
</div>
</div>
<div className="w-[350px] grid gap-y-3 -translate-x-4 md:translate-x-0">
<div className=" bg-white border px-[40px] pt-12 pb-6">

  <a href="#" className="flex justify-center mb-8"><img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" className="h-[51px] flex "></img></a>
  <form className="grid gap-y-2">
    <Input type="text" value={username} onChange={e => setUsername(e.target.value)} label="Numri i telefonit, emri ose e-mail"></Input>
<Input type="password" value={password} onChange={e => setPassword(e.target.value)} label="Fjalëkalimi"></Input>

<button type="submit" disabled={!enable} className="h-[30px] mt-2 bg-blueColor transition-all disabled:opacity-50 font-medium text-sm rounded text-white">Kyçu</button>
<div>
  <div className="flex justify-center my-2.5 mb-3.5 items-center">
  <div className="h-px bg-gray-300 flex-1"> </div>
<span className="px-4 text-[13px] text-gray-500 font-semibold">OR</span>
<div className="h-px bg-gray-300 flex-1"></div>
</div>

  <a href="#" className="flex justify-center mb-2 items-center gap-x-2 text-sm font-semibold text-[#385186]">
  <AiFillFacebook className="text-[#385186]" size={20}/>
Kyçuni nëpërmjet Facebook
</a>
<a href="#" className="flex text-xs pt-2 justify-center items-center text-link">Keni harruar fjalëkalimin?</a>

</div>
  </form>
</div>
<div className="bg-white border flex justify-center items-center py-5 text-sm ">
Nuk keni një llogari? <a href="#" className="text-blueColor pl-1">Regjistrohu</a>
</div>

</div>

</div>
<div className="text-xs text-gray-500 flex justify-center">
 <span>Shqip  © 2022 Instagram Clone from Andi Mashkulli </span> 
</div>
</div>
  );
}

export default App;
