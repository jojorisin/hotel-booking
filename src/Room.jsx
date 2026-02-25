

function Room({ name, exteriorImage, interiorImage, description, price, onSelect, setStep }) {
    return (
        <div className="room">
            <img src={exteriorImage} alt={name + " exterior"} className="room-exterior-image" />
            <img src={interiorImage} alt={name + " interior"} className="room-interior-image" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Cost per night: €{price}</p>
            <button onClick={() => { onSelect({ name, price }); setStep(2); }}>Book now</button>
        </div>
    )
}

export default Room;