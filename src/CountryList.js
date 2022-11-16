import Country from "./Country"


const  CountryList = (props) => {

    return (
        <ul>
            {props.countryList?.map((country) => (
                <Country
                    name={country.name}
                />
            ))}
        </ul>
    );
};

export default CountryList