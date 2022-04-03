import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';


function Department() {
let [index, setIndex] = useState(0);
const frame = useRef(null)
//컴포넌트 생성시 처음 한번만 동작
//추후 exios로 불러온 데이터 배열을 담을 state생성
const [members, setMember] = useState([]);
//public 폴더의 절대 경로값을 구함
const path = process.env.PUBLIC_URL;
//절대경로에서부터의 json파일 데이터 url값
const url = `${path}/DB/department.json`;
useEffect(()=>{
    //console.log('컴포넌트 생성');
    frame.current.classList.add('on')
    
    axios
    .get(url)
    .then((json) =>{
        //console.log(json.data.data);
        setMember(json.data.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    // return ()=>{
    //     console.log('컴포넌트 소멸');
    // }
},[])

//index를 의존성으로 등록해서 해당 state가 변경될때마다 호출
useEffect(()=>{
    console.log('index 값 생성');
},[index])

  return (
    <section className='department' ref={frame}>
        <div className='inner'>
            <h1>Department</h1>
            <button onClick={()=>{
                let newMembers = [...members];
                newMembers[0].name = 'Mike';
                setMember(newMembers);
            }}>change</button>
            {/* <button className='plus' onClick={() => setIndex(++index)}>
                더하기
            </button>
            <button className='minus' onClick={() => setIndex(--index)}>
                빼기
            </button>
            <h3>{index}</h3> */}

            {/* state에 있는 배열값을 반복돌면서 가상 Dom 생성 */}
            <ul>
                {members.map((data, idx)=>{
                    return <li key={idx}>
                    <img src ={`${path}/img/${data.pic}`} alt="" />
                        <h2>{data.name}</h2>
                        <p>{data.position}</p>
                    </li>
                })}
                
            </ul>
        </div>
    </section>
  )
}

export default Department
/*
  useEffect : 해당 컴포너틑의 생성, 상태값 변경, 소멸이라는 생명주기에 따라 특정 구문을 실행할 수 있는 hook
  -- useEffect는 첫번째 인수로 콜백함수 등록
  -- useEffect는 두번째 인수로 의존성 등록 (원하는 state를 의존성으로 등록)
  -- useEffect의 두번째 인수로 빈 배열을 의존성으로 등록 : 해당 컴포넌트가 처음 생성될때 한번만 호출 가능
  -- useEffect안쪽에서 함수를 리턴하면 해당 함수는 컴포넌트가 소멸할때 호출됨
*/