import iconsearch from '../assets/search.png';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from './Selector';
const SearchBar = () => {

    const searchQuery = () => {
        console.log('searching ...')
    }

    return <div className='p-5'>
        <div className='bg-darkblue pl-3 py-1 flex items-center rounded-md'>
            <img className='w-8 p-1' src={iconsearch} alt="search" onClick={searchQuery} />
            <input className='py-2 bg-transparent w-full px-4 rounded-md placeholder:p-2 hover:outline-none' type="text" placeholder="Search for a country..." />
        </div>
        <div className='py-4'>
            <div className='bg-transparent text-white'>
                <Select>
                    <SelectTrigger className="w-[200px] bg-darkblue border-none">
                        <SelectValue placeholder="Filter by Region" />
                    </SelectTrigger>
                    <SelectContent className='text-lightgray border-none bg-darkblue'>
                        <SelectGroup>
                            <SelectItem value="Africa">Africa</SelectItem>
                            <SelectItem value="America">America</SelectItem>
                            <SelectItem value="Asia">Asia</SelectItem>
                            <SelectItem value="Europe">Europe</SelectItem>
                            <SelectItem value="Ocenia">Ocenia</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    </div>;
};

export default SearchBar;
