import React, { useEffect, useState } from 'react'

const HeaderComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const updateCount = () =>{
        const newCount = count + 2;
        setCount(newCount);

    }
    
    const updateCoun = () =>{
        const secondCount = count - 2;
        setCount(secondCount);
    }
    
    useEffect(()=>{
        setName('Jonh')
        console.log('happen')
    },[])

    useEffect(()=>{
        
    },[count])

    return (
        <div className='headerComponent'>
            <p>Count: {count}</p>
            <button className='addBtn' onClick={() => {
                if(count < 10){
                    updateCount()
                }
            }}>Incrase</button>
            <button className='addBtn' onClick={() => {
                if(count > 0){
                    updateCoun()
                }
            }}>Decrase</button>
            <p>{name}</p>
        </div>
    )



     
}



export default HeaderComponent;