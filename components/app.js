const { default: Banner } = require("./banner")
const { default: HouseList } = require("./houseList")

const App = () => {
    return (
        <>
            <Banner>
                <div>Providing houses all over the world</div>
            </Banner>
            <HouseList/>
        </>
    );
}

export default App