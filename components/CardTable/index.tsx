'use client'

import { Card } from "@/schemas";

const CardTable = ({data}: {data: Card[]}) => {

  return (

    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th scope="col" className="px-6 py-3" key={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </th>
                  ))}
                </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  {Object.values(item).map((value, idx) => (
                    <td key={idx} className="px-6 py-4">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
        </table>
    </div>
     );
}
 
export default CardTable;