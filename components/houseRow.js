import React from "react"
import currencyFormatter from "./currencyFormatter"

const HouseRow = ({house}) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{currencyFormatter.format(house.price)}</td>
        </tr>
    )
}

const HouseRowMem =React

export default HouseRow;
export {HouseRowMem};