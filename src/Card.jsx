function Card({title="Default Title", setMargin='0px', imgLeft=false, description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}){
    return (
        <div className='card' style={{
            padding: '20px',
            borderRadius: '25px',
            border: '2px solid gray',
            marginBottom: setMargin,
            boxShadow: '7px 7px 10px rgba(131, 130, 130, 0.5)',
        }}>
            <h2 style={{
                textAlign: 'center',
                margin: '0px',
                marginBottom: '20px'
            }}>
                {title}
            </h2>
            <div className='cardContent' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {imgLeft ? <p style={{marginRight: '20px'}}>{description}</p> : <></>}
                <img className='cardImg' style={{backgroundColor: 'gray', width: '100px', height: '100px'}} src='img/hero.jpg'></img>
                {imgLeft ? <></> : <p style={{marginLeft: '20px'}}>{description}</p>}
            </div>
        </div>
    )
}

export default Card;