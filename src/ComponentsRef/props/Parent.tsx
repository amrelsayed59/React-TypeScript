import {ChildAsFC} from "./Child"





const Parent: React.FC<any> = () => {
    return (
        <ChildAsFC name="Amr Ahmed" onClick={() => console.log('Clicked')}>
           <p> Children</p>
        </ChildAsFC>
    )
}

export default Parent

