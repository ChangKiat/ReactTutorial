import React, { useEffect, useState } from "react";
import HouseRowMem from "./houseRow";

const houseArray = [
    {
        id: 1,
        address: "12 Valley of kings, Geneva",
        country: "Switzerland",
        price: 90000000,
    },
    {
        id: 2,
        address: "55 Road of Forks, Bern",
        country: "Switzerland",
        price: 1230000000,
    }
]

const HouseList = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
          const response = await fetch("/api/houses");
          const houses = await response.json();
          setHouses(houses);
        };
        fetchHouses();
      }, []);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "5345 Road of Forks, Bern",
                country: "Switzerland",
                price: 50000,
            }
        ])
    }
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    House Currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRowMem key={h.id} house={h} />)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    )
}

export default HouseList