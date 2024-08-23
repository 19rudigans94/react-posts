export default function MySelect({ defaultValue, options, value, onChange }) {
    return (
        <select className="my-select bg-white border border-gray-300 rounded-md shadow-sm p-2 text-gray-700 m-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            value={value}
            onChange={e => onChange(e.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

