import React from "react"

const EventComponent = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    const onDragStart = (event:React.DragEvent<HTMLDivElement>) => {
        console.log(event)
    }

    return(
        <>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Drag Me</div>
        </>
    )
}

export default EventComponent