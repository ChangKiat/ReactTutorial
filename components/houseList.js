const houses = [
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
                    {houses.map(h => (
                        <tr key={h.id}>
                            <td>{h.address}</td>
                            <td>{h.country}</td>
                            <td>{h.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default HouseList