import React, { useState } from 'react'


function Content(props) {
    let [title, setTitle] = useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"])
    let [desc, setDesc] = useState(["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"])
    let [good, setGood] = useState(0)
    let [bad, setBad] =useState(0)
    

    function goodFun(){
        setGood(good+1)
    }
    function Bad(){
        setBad(bad+1)
    }
    function Change(){
        let copy = [...title]
        let copy2 = [...desc]
        copy[0] = "쌍둥이 아기판다77"
        copy2[3] = "스페셜 이벤트222"
        setTitle(copy)
        setDesc(copy2)
    }

    let [modalChk, setModalChk] = useState(false)
    function Modal(){
        // if(modalChk === false){
        //     setModalChk(true)
        // }else{
        //     setModalChk(false)
        // }
        // modalChk === false ? setModalChk(true) : setModalChk(false)
        setModalChk(!modalChk)
    }

  return (
    <>
        <div className="content-item" onClick={Modal}>
            <img src="https://via.placeholder.com/320" alt="테스트" />
            <h3>{title[props.arrayNum]}</h3>
            <p>{desc[props.arrayNum]}</p>
            <p>{props.desc2}</p>
            <span onClick={goodFun}>👍 {good}</span>
            <span onClick={Bad}>👎 {bad}</span>
            <button onClick={Change}>수정</button>
        </div>
        {
            (modalChk === true && <div className='window' onClick={Modal}></div>)
            // (modalChk === true ? <div className='window'></div> : null)
        }
    </>
  )
}

export default Content