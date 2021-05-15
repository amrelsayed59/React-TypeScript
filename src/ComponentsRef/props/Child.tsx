interface ChildProps {
    name :string;
    onClick: () => void;
    children:any

}

// export  const Child = ({name, onClick, children}:ChildProps) => {
//     return(
//         <>
//         <p>Hello My Name Is {name}</p>
//         <button onClick={onClick}>Click me</button>
//         <p>{children}</p>
//         </>
//     )
// }

export const ChildAsFC: React.FC<ChildProps> = ({name,onClick,children}) => {
    return <>
        <p>Hello My Name Is {name}</p>
        <button onClick={onClick}>Click me</button>
        {children}
    </>
}