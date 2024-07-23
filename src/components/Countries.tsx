import { useQuery } from "@tanstack/react-query";
const Countries = () => {
    const fetchCountries = async () => {
        const res = await fetch("https://restcountries.com/v3.1/all").then((res) => res.json())
        return res;
    }

    function commafy(num) {
        const str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '1 ');
        }
        return str.join('.');
    }

    const { data, isLoading } = useQuery({ queryKey: ['countries'], queryFn: fetchCountries })
    console.log(data, isLoading);
    return <div className="font-mono">
        <div className="flex flex-col gap-6">
            {data?.map((country) => {
                return (
                    <div className="p-4 py-0" key={country.cca3}>
                        <div className="rounded-t-md">
                            <img className="rounded-t-md h-44 w-full" src={country.flags.png} alt={country.flags.alt} />
                        </div>
                        <div className="bg-darkblue p-5 py-8 flex flex-col gap-4 rounded-b-md">
                            <h2 className="font-bold text-xl">{country.name.common}</h2>
                            <div>
                                <p><b>Population:</b> {commafy(Number(country.population))}</p>
                                <p><b>Region:</b> {country.region}</p>
                                <p><b>Capital:</b>{country.capital}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>;
};

export default Countries;
