import ItemList from "./itemList"
const ItemListContainer = (props) =>{
    return (
        <>
        <h1 onClick={props.onTitle}>{props.greeting}</h1>
        <ItemList/>
        </>
        )
}
export default ItemListContainer